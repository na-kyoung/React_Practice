import { S3 } from '@aws-sdk/client-s3';
import slugify from "slugify";
import xss from "xss";
import fs from 'node:fs';

// AWS S3 설정
const s3 = new S3({
  region: 'us-east-1'
});

export async function saveMeal(meal){
  meal.slug = slugify(meal.title, { lower: true }); // title 기반으로 slug (UNIQUE KEY) 만들기 & 소문자
  meal.instructions = xss(meal.instructions); // instructions 내 해로운 컨텐츠 제거

  const extension = meal.image.name.split('.').pop(); // 파일 확장명 (png, jpeg)만 추출
  const fileName = `${meal.slug}.${extension}`; // 파일명+확장명 생성

  const stream = fs.createWriteStream(`public/images/${fileName}`); // 파일을 서버에 저장
  const bufferedImage = await meal.image.arrayBuffer(); // 이미지를 buffer로 변환

  // 파일 저장 (파일시스템 저장)
  stream.write(Buffer.from(bufferedImage), (error) => {
    if(error){
      throw new Error('Saving image failed!');
    }
  });

  meal.image = `/images/${fileName}` // 저장된 파일 경로로 변경

  console.log(meal);

  // DB 저장
}

// AWS S3 클라우드 저장
export async function saveMeal_AWS(meal){
  meal.slug = slugify(meal.title, { lower: true }); // title 기반으로 slug (UNIQUE KEY) 만들기 & 소문자
  meal.instructions = xss(meal.instructions); // instructions 내 해로운 컨텐츠 제거

  const extension = meal.image.name.split('.').pop(); // 파일 확장명 (png, jpeg)만 추출
  const fileName = `${meal.slug}.${extension}`; // 파일명+확장명 생성

  const bufferedImage = await meal.image.arrayBuffer(); // 이미지를 buffer로 변환
  
  console.log(meal);
  
  // AWS S3 클라우드 이미지 저장
  s3.putObject({
    Bucket: 'maxschwarzmueller-nextjs-demo-users-image',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  meal.image = fileName;

  // DB 저장
  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}
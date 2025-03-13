'use server'; // 모든 함수가 Server Actions

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text){
  return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData){
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if(
    isInvalidText(meal.title) || 
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image || meal.image.size === 0
  ){
    // throw new Error('Invalid Input'); // error.js 화면으로 이동
    return {
      message: 'Invalid input.'
    }
  }

  console.log(meal); // 서버측 터미널에 찍힘
  await saveMeal(meal); // 데이터 저장
  // revalidatePath('/', 'layout'); // 유효성 재검사 - 모든 페이지 재검사
  // revalidatePath('/meals', 'layout'); // 유효성 재검사 - 중첩된 페이지 모두 재검사
  revalidatePath('/meals', 'page'); // 유효성 재검사 - 해당 페이지만 재검사
  redirect('/meals'); // meals 화면으로 돌아가기
}
'use server'; // 모든 함수가 Server Actions

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

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

  console.log(!meal.image);
  console.log(meal.image.size === 0);

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
  redirect('/meals'); // meals 화면으로 돌아가기
}
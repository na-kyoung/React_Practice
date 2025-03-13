// http://localhost:3000/meals/[mealSlug]

import { notFound } from "next/navigation";

export async function generateMetadata(params) {
  const meal = getMeal(params.mealSlug);

  if(!meal){
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage(){
  return (
    <>
      <h1>Meal Details</h1>
    </>
  );
}
// http://localhost:3000/meals
import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { Suspense } from 'react';

async function Meals() {
  // const meals = await getMeals();
  const meals = [
    {'id':1, 'title':'Dummy Data 1'},
    {'id':2, 'title':'Dummy Data 2'}
  ];

  setTimeout(function(){
    console.log("Fetching Data...");
    // return <MealsGrid meals={meals} />;
  }, 5000);

  // throw new Error('Loading meals failed!');

  return await <MealsGrid meals={meals} />;
}
export default function MealsPage(){
  console.log('MealsPage');

  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching Meals Data...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
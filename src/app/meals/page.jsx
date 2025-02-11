import Meals from '@/components/Meals';
import React from 'react';

export const metadata = {
    title: {
        absolute: "Meal"
    },
    description: "The is meal. Manusher Pola khaite aai.",
  };

const MealsPage = () => {
    return (
        <div className='space-y-4 m-12'>
           <h1>Delicious Meals on the go</h1>
           <h1>Search the meal you craving and countdown for 30 minutes. We promise you will find it in your table. </h1>
           <p>Lets give it a try bro... </p>

           <Meals />
        </div>
    );
};

export default MealsPage;
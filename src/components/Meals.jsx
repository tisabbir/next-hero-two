"use client";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await res.json();
    console.log(data.meals);
    setMeals(data.meals);
  };

  const handler = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <input
        onChange={handler}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />

      <button onClick={loadData} className="btn ml-4 btn-secondary">
        Search
      </button>

      <div className="grid grid-cols-3 gap-4 mt-12">
        {meals?.length > 0
          ? meals.map((meal) => (
              <>
                <div className="card bg-base-100 w-96 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{meal.strMeal}</h2>
                    <p>{meal.strInstructions.slice(0,300)}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </>
            ))
          : "No Data Found..."}
      </div>
    </div>
  );
};

export default Meals;

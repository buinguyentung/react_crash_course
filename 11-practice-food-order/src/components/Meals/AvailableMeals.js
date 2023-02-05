import React, { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

// import { DUMMY_MEALS } from './dummy-meals';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [meals, setMeals] = useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const fetchMealsData = async () => {
      try {
        const response = await fetch('https://reactjs-food-order-app-3f453-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
        
        if (!response.ok) {
          throw new Error('Request failed!');
        }
        
        const data = await response.json();
        // console.log(data);

        const loadedMeals = [];
        for (let key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setMeals(loadedMeals);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMealsData();

  }, []);

  // const mealsList = DUMMY_MEALS.map((meal) => {
  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Loading data...</p>}
        {!isLoading && error && <p>Error while loading data!</p>}
        {!isLoading && !error && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;

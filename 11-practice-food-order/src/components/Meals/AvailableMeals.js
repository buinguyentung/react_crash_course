import React from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import { DUMMY_MEALS } from './dummy-meals';
import classes from './AvailableMeals.module.css';

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => {
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
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

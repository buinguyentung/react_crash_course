import React from 'react';

import { DUMMY_MEALS } from './dummy-meals';
import classes from './AvailableMeals.module.css';

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <li>{meal.name}</li>;
  });

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;

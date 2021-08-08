import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList';

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return <MealsList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;

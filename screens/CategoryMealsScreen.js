import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList';

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.categoryId;

  const avaliableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = avaliableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealsList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;

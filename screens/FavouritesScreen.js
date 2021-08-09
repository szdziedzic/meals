import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealsList from '../components/MealsList';
import { useSelector } from 'react-redux';

const FavouritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  return <MealsList listData={favMeals} navigation={props.navigation} />;
};


export default FavouritesScreen;

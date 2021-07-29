import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.categoryId;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={StyleSheet.screen}>
      <Text>The Category Meals Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({ name: 'MealDetail' });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;

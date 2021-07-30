import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { enableScreens } from 'react-native-screens';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

enableScreens();

const Stack = createStackNavigator();

const MealsNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primaryColor : '',
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'Meal Categories',
          }}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          options={({ route }) => {
            const catId = route.params.categoryId;
            const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
            return {
              title: selectedCategory.title,
            };
          }}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={({ route }) => {
            const mealId = route.params.mealId;
            const selectedMeal = MEALS.find((meal) => meal.id === mealId);
            return {
              title: selectedMeal.title,
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item
                    title="Favourite"
                    iconName="ios-star"
                    onPress={() => {}}
                  />
                </HeaderButtons>
              ),
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;

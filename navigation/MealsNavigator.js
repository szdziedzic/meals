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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavouritesScreen from '../screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FiltersScreen from '../screens/FiltersScreen';
import { color } from 'react-native-reanimated';

enableScreens();

const MealsStack = createStackNavigator();

const FavouritesStack = createStackNavigator();

const FiltersStack = createStackNavigator();

const MainDrawer = createDrawerNavigator();

const MealsNavigator = (props) => {
  return (
    <MealsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      }}
    >
      <MealsStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={(navData) => {
          return {
            title: 'Categories',
            headerLeft: () => {
              return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                      navData.navigation.toggleDrawer();
                    }}
                  />
                </HeaderButtons>
              );
            },
          };
        }}
      />
      <MealsStack.Screen
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
      <MealsStack.Screen
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
    </MealsStack.Navigator>
  );
};

const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: Colors.accentColor }}>
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name="ios-star" size={25} color={tabInfo.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const FavouritesNavigator = () => {
  return (
    <FavouritesStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      }}
    >
      <FavouritesStack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={(navData) => {
          return {
            title: 'Your Favourites',
            headerLeft: () => {
              return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                      navData.navigation.toggleDrawer();
                    }}
                  />
                </HeaderButtons>
              );
            },
          };
        }}
      />
      <FavouritesStack.Screen name="MealDetail" component={MealDetailScreen} />
    </FavouritesStack.Navigator>
  );
};

const FiltersNavigator = () => {
  return (
    <FiltersStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      }}
    >
      <FiltersStack.Screen
        name="Filters"
        component={FiltersScreen}
        options={(navData) => {
          return {
            title: 'Filters',
            headerLeft: () => {
              return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                      navData.navigation.toggleDrawer();
                    }}
                  />
                </HeaderButtons>
              );
            },
          };
        }}
      />
    </FiltersStack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainDrawer.Navigator
        drawerContentOptions={{
          activeTintColor: Colors.accentColor,
          labelStyle: { fontFamily: 'open-sans-bold' },
        }}
      >
        <MainDrawer.Screen
          name="MealsFav"
          component={MealsFavTabNavigator}
          options={{ drawerLabel: 'Meals' }}
        />
        <MainDrawer.Screen
          name="Filters"
          component={FiltersNavigator}
          options={{ drawerLabel: 'Filters' }}
        />
      </MainDrawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

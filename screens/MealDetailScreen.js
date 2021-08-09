import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavourite } from '../store/actions/meals';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const avaliableMeals = useSelector((state) => state.meals.meals);

  const mealId = props.route.params.mealId;

  const selectedMeal = avaliableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favourite"
            iconName="ios-star"
            onPress={toggleFavouriteHandler}
          />
        </HeaderButtons>
      ),
    });
  }, [toggleFavouriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageURL }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText style={styles.mealDetailText}>
          {selectedMeal.duration} min
        </DefaultText>
        <DefaultText style={styles.mealDetailText}>
          {selectedMeal.complexity.toUpperCase()}
        </DefaultText>
        <DefaultText style={styles.mealDetailText}>
          {selectedMeal.affordabillity.toUpperCase()}
        </DefaultText>
      </View>
      <Text style={styles.title}>Indigrients</Text>
      {selectedMeal.ingridents.map((indigrient) => (
        <ListItem key={indigrient}>{indigrient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: Colors.accentColor,
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;

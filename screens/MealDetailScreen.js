import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { MEALS } from '../data/dummy-data';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const mealId = props.route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

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

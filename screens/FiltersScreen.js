import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filtersContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
        trackColor={{ true: Colors.accentColor }}
        thumbColor={Platform.OS === 'android' ? Colors.accentColor : ''}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Avaliable Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onChange={() => setIsGlutenFree(!isGlutenFree)}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onChange={() => setIsLactoseFree(!isLactoseFree)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={() => setIsVegan(!isVegan)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={() => setIsVegetarian(!isVegetarian)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
});

export default FiltersScreen;

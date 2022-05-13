import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetailScreen/Subtitle";
import List from "../components/MealDetailScreen/List";
import IconButton from "../components/IconButton";
const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonHandler = () => {
    console.log("pressed!");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={"star"}
            color={"white"}
            onPress={headerButtonHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        style={styles.imageStyles}
        source={{ uri: selectedMeal.imageUrl }}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          textStyle={styles.detailText}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          duration={selectedMeal.duration}
        />
      </View>
      <View style={styles.listOutterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  imageStyles: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOutterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

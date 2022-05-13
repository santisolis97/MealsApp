import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#c5dafa",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: "#c5dafa",
    borderBottomWidth: 2,
    margin: 4,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});

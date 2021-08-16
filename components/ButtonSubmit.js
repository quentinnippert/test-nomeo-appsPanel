import React from "react";

// ____ GRAFIC ELEMENTS ____ //
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonSubmit = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.submit()}
      style={styles.buttonSubmit}
    >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSubmit: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: "#54BECA",
    marginBottom: "6%",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default ButtonSubmit;

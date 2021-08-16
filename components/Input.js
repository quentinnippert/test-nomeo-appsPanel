import React from "react";

// ____ GRAFIC ELEMENTS ____ //
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={(e) => props.onChangeInput(e)}
      value={props.value}
      textContentType={props.type}
      placeholder={props.placeholder}
      keyboardType={props.keyboard}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 50,
    borderBottomColor: "#54BECA",
    borderBottomWidth: 1,
    marginTop: "2%",
    fontSize: 18
  },
});

export default Input;

import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import firebase from "../database/firebase";

const AddUserScreen = (props) => {
  const initalState = { // nombres completos, fecha de nacimiento, estatura, dirección y ubicación GPS
    name: "",
    birthday: "",
    height: "",
    adress:"",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("please provide a name");
    } else {

      try {
        await firebase.db.collection("users").add({
          name: state.name,
          birthday: state.birthday,
          height: state.height,
          adress:state.adress,
        });

        props.navigation.navigate("UsersList");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombres completos"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>

      {/* Birthday Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Cumpleaños"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "birthday")}
          value={state.birthday}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Estatura"
          onChangeText={(value) => handleChangeText(value, "height")}
          value={state.height}
        />
      </View>
      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Dirección"
          onChangeText={(value) => handleChangeText(value, "adress")}
          value={state.adress}
        />
      </View>

      <View style={styles.button}>
        <Button title="Save User" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddUserScreen;

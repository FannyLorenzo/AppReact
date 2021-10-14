import React, {useEffect, useState} from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import firebase from "../database/firebase";

const AddAttentionScreen = (props) => {
  const initalState = { 
    id_user:"",
    name: "",
    date:"",
    peso:"",
    temperatura:"",
    presion:"",
    saturacion:""
  };

  const [state, setState] = useState(initalState);
  const [loading, setLoading] = useState(true);

   const handleChangeText = (value, name) => {   
    setState({ ...state, [name]: value });
  };

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const state = doc.data();
    setState({ ...state, 
        id_user: doc.id,
        date:"",
    peso:"",
    temperatura:"",
    presion:"",
    saturacion:""
     });
    setLoading(false);
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }
  const saveNewAttention = async () => {
    if (state.peso === "") {
      alert("porfavor ingrese el peso");
    } else {

      try {
        await firebase.db.collection("attentions").add({
          name: state.name,
          date: state.date,
          peso:state.peso,
          temperatura:state.temperatura,
          presion: state.presion,
          saturacion:state.saturacion,
        });

        props.navigation.navigate("AttentionList");
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
          placeholder="Fecha de atención"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "date")}
          value={state.date}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Peso"
          onChangeText={(value) => handleChangeText(value, "peso")}
          value={state.peso}
        />
      </View>
      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Temperatura"
          onChangeText={(value) => handleChangeText(value, "temperatura")}
          value={state.temperatura}
        />
      </View>
      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Presión"
          onChangeText={(value) => handleChangeText(value, "presion")}
          value={state.presion}
        />
      </View>
      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Saturación"
          onChangeText={(value) => handleChangeText(value, "saturacion")}
          value={state.saturacion}
        />
      </View>

      <View style={styles.button}>
        <Button title="Guardar Consulta" onPress={() => saveNewAttention()} />
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

export default AddAttentionScreen;

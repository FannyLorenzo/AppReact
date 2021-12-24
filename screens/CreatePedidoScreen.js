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

const AddPedidoScreen = (props) => {
  const initalState = { 
    id_producto:"",
    nombre: "",
    fecha:"",
    precio:"",
    cantidad:"",
    direccion:"",
    entregado:false
  };

  const [state, setState] = useState(initalState);
  const [loading, setLoading] = useState(true);

   const handleChangeText = (value, name) => {   
    setState({ ...state, [name]: value });
  };

  const getProductoById = async (id) => {
    const dbRef = firebase.db.collection("productos").doc(id);
    const doc = await dbRef.get();
    const state = doc.data();
    setState({ ...state, 
        id_producto: doc.id,
        fecha:"",
    precio:"",
    cantidad:"",
    direccion:""
     });
    setLoading(false);
  };

  useEffect(() => {
    getProductoById(props.route.params.productoId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }
  const saveNewPedido = async () => {
    if (state.cantidad === "") {
      alert("porfavor ingrese la cantidad");
    } else {

      try {
        await firebase.db.collection("pedidos").add({
          nombre: state.nombre,
          fecha: state.fecha,
          precio:state.precio,
          cantidad:state.cantidad,
          direccion: state.direccion,
          entregado: false
        });

        props.navigation.navigate("PedidoList");
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
          placeholder="Nombre del producto"
          onChangeText={(value) => handleChangeText(value, "nombre")}
          value={state.nombre}
        />
      </View>

      {/* Birthday Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Fecha de atención"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "fecha")}
          value={state.fecha}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="precio"
          onChangeText={(value) => handleChangeText(value, "precio")}
          value={state.precio}
        />
      </View>
      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="cantidad"
          onChangeText={(value) => handleChangeText(value, "cantidad")}
          value={state.cantidad}
        />
      </View>
      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Dirección"
          onChangeText={(value) => handleChangeText(value, "direccion")}
          value={state.direccion}
        />
      </View>
     

      <View style={styles.button}>
        <Button title="Guardar Pedido" onPress={() => saveNewPedido()} />
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

export default AddPedidoScreen;

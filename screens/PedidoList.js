import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const PedidoScreen = (props) => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {    
    firebase.db.collection("pedidos").onSnapshot((querySnapshot) => {
      const pedidos = [];
      querySnapshot.docs.forEach((doc) => {
        const { nombre, fecha, precio, cantidad, direccion } = doc.data();
        pedidos.push({ //: Datos del producto seleccionado, Campo editable para la cantidad que desea comprar, Datos de envío de su perfil
          id: doc.id,
          nombre, //producto
          precio, //producto
          fecha,
          cantidad,
          direccion
        });
      });
      setPedidos(pedidos);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("CreatePedidoScreenListProducto")}
        title="Agregar pedido"
      />
      {pedidos.map((producto) => {
        return (
          <ListItem
            key={producto.id}
            bottomDivider           
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://cdn-icons-png.flaticon.com/512/1822/1822045.png",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{producto.nombre}</ListItem.Title>
              <ListItem.Subtitle>Fecha: {producto.fecha}</ListItem.Subtitle>              
              <ListItem.Subtitle>Precio: {producto.precio}, Cantidad: {producto.cantidad}</ListItem.Subtitle>
              <ListItem.Subtitle>Dirección: {producto.direccion}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default PedidoScreen;

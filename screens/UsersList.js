import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const UserScreen = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    firebase.db.collection("productos").onSnapshot((querySnapshot) => {
      const productos = [];
      querySnapshot.docs.forEach((doc) => {
        const { nombre, descripcion, precio, cantidad } = doc.data();
        productos.push({ // Nombre del producto, Descripción, Precio,  Cantidad ofertada. HOLI
          id: doc.id,
          nombre,
          descripcion,
          precio,
          cantidad
        });
      });
      setProductos(productos);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("CreateUserScreen")}
        title="Agregar producto"
      />
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://e7.pngegg.com/pngimages/775/628/png-clipart-computer-icons-avatar-user-profile-avatar-heroes-woman.png",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.birthday}</ListItem.Subtitle>
              <ListItem.Subtitle>{user.adress}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserScreen;

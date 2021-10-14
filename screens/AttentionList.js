import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const AttentionScreen = (props) => {
  const [attentions, setAttentions] = useState([]);

  useEffect(() => {
    firebase.db.collection("attentions").onSnapshot((querySnapshot) => {
      const attentions = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, date, peso, temperatura,presion,saturacion } = doc.data();
        attentions.push({ //Registrar información: peso, temperatura, presión, nivel de saturación.
          id: doc.id,
          name,
          date,
          peso,
          temperatura,
          presion,
          saturacion
        });
      });
      setAttentions(attentions);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("CreateAttentionScreenListUser")}
        title="Agregar consulta"
      />
      {attentions.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider           
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://e7.pngegg.com/pngimages/977/624/png-clipart-identification-card-brand-rectangle-font-user-id-rectangle-application-thumbnail.png",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>Consulta: {user.date}</ListItem.Subtitle>              
              <ListItem.Subtitle>Peso: {user.peso}, Temperatura: {user.temperatura}</ListItem.Subtitle>
              <ListItem.Subtitle>Presión: {user.presion}, Saturación: {user.saturacion}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default AttentionScreen;

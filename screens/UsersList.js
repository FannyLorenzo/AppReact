import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const UserScreen = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, birthday, adress } = doc.data();
        users.push({ // name:"", birthday:"", height:"", adress:"",
          id: doc.id,
          name,
          birthday,
          adress,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("CreateUserScreen")}
        title="Agregar paciente"
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

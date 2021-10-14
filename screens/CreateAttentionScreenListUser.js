import React, { useState, useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const CreateAttentionScreenListUserScreen = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name } = doc.data();
        users.push({
          id: doc.id,
          name
        });
      });
      setUsers(users);
    });
  }, []);

  

  return (
    <ScrollView>
      <View>
        <h4> Seleccione un paciente</h4>
      </View>
      
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("CreateAttentionScreen", {
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
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default CreateAttentionScreenListUserScreen;

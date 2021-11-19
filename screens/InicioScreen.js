import React, { useState, useEffect } from "react";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const InicioScreen = (props) => {
  
  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("UsersList")}
        icon={
          <Icon
            name="user-circle-o"
            size={15}
            color="blue"
          />
        }
        title=" Pacientes"
        type="outline"

      />
      <Button
        onPress={() => props.navigation.navigate("AttentionList")}
        icon={
          <Icon
            name="id-card-o"
            size={15}
            color="blue"
          />
        }
        title=" Atenciones"
        type="outline"

      />
      <Button
        onPress={() => props.navigation.navigate("Location")}
        icon={
          <Icon
            name="id-card-o"
            size={15}
            color="blue"
          />
        }
        title="Ver Localización"
        type="outline"

      />
    </ScrollView>
  );
};

export default InicioScreen;

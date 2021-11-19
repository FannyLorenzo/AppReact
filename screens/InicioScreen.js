import React, { useState, useEffect } from "react";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const InicioScreen = (props) => {
  const [state, setState] = useState({
    longitud: 0,
    latitud: 0,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          longitud: position.coords.longitude,
          latitud: position.coords.latitude
        })
      },
      function (error) {
        console.log(error)
      },
      {
        enableHighAccuracy: true
      }
    );
  });
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
      <div>
        <p>longitud:{state.longitud}</p>
        <p>latitud:{state.latitud}</p>
      </div>
    </ScrollView>
  );
};

export default InicioScreen;

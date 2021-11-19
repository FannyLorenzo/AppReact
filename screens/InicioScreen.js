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
            name="gift"
            size={15}
            color="blue"
          />
        }
        title=" Productos"
        type="outline"       
        
      /> 
       <Button
        onPress={() => props.navigation.navigate("AttentionList")}
        icon={
          <Icon
            name="cart-arrow-down"
            size={15}
            color="blue"
          />
        }
        title=" Compras"
        type="outline"       
        
      />      
    </ScrollView>
    
  );
};

export default InicioScreen;

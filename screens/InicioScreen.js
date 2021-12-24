import React, { useState, useEffect } from "react";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from "react-native-gesture-handler";

const InicioScreen = (props) => {

  return (
    <ScrollView>
       <Button
        onPress={() => props.navigation.navigate("ProductosList")}
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
        onPress={() => props.navigation.navigate("PedidoList")}
        icon={
          <Icon
            name="cart-arrow-down"
            size={15}
            color="blue"
          />
        }
        title=" Pedido"
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
        title=" Ver Localización"
        type="outline"

      />
    </ScrollView>
  );
};

export default InicioScreen;

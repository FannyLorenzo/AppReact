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
        title=" Productos (vendedor) "
        type="outline"       
        
      />          
      <Button
        onPress={() => props.navigation.navigate("PedidoListxVendedor")}
        icon={
          <Icon
            name="cart-arrow-down"
            size={15}
            color="blue"
          />
        }
        title=" Pedidos (vendedor)"
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
        title=" Pedidos (comprador)"
        type="outline"       
        
      />   
    </ScrollView>
  );
};

export default InicioScreen;

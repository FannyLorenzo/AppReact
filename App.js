import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import CreateProductoScreen from "./screens/CreateProductoScreen";
import ProductoDetailScreen from "./screens/ProductoDetailScreen";
import ProductosList from "./screens/ProductosList";
import PedidoListxVendedor from "./screens/PedidoListxVendedor";
import PedidoListxVendedorEditar from "./screens/PedidoListxVendedorEditar";
import InicioScreen from "./screens/InicioScreen";
import Location from "./screens/Location"
import PedidoList from "./screens/PedidoList"
import CreatePedidoScreen from "./screens/CreatePedidoScreen"
import CreatePedidoScreenListProducto from "./screens/CreatePedidoScreenListProducto"
import CameraComponent from "./screens/CameraComponent";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#621FF7",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="InicioScreen"
        component={InicioScreen}
        options={{ title: "Mandaditos" }}
      />
      <Stack.Screen
        name="ProductosList"
        component={ProductosList}
        options={{ title: "Productos Ofertados" }}
      />
      <Stack.Screen
        name="CreateProductoScreen"
        component={CreateProductoScreen}
        options={{ title: "Nuevo producto" }}
      />
      <Stack.Screen
        name="ProductoDetailScreen"
        component={ProductoDetailScreen}
        options={{ title: "Datos de producto" }}
      />
       <Stack.Screen
        name="PedidoList"
        component={PedidoList}
        options={{ title: "Historial de compras" }}
      />
      <Stack.Screen
        name="PedidoListxVendedor"
        component={PedidoListxVendedor}
        options={{ title: "Control de entregas" }}
      />
      <Stack.Screen
        name="PedidoListxVendedorEditar"
        component={PedidoListxVendedorEditar}
        options={{ title: "Modificar estado de entrega" }}
      />
       <Stack.Screen
        name="CreatePedidoScreen"
        component={CreatePedidoScreen}
        options={{ title: "Agregar nueva compra" }}
      />
      <Stack.Screen
       name="CreatePedidoScreenListProducto"
       component={CreatePedidoScreenListProducto}
       options={{ title: "Seleccione un producto" }}
     />
     <Stack.Screen
       name="Location"
       component={Location}
       options={{ title: "Ver Localización" }}
     />
     <Stack.Screen
       name="CameraComponent"
       component={CameraComponent}
       options={{ title: "Tomar foto" }}
     />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

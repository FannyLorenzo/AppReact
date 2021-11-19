import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import UsersList from "./screens/UsersList";
import InicioScreen from "./screens/InicioScreen";
import AttentionList from "./screens/AttentionList"
import CreateAttentionScreen from "./screens/CreateAttentionScreen"
import CreateAttentionScreenListUser from "./screens/CreateAttentionScreenListUser"

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
        options={{ title: "APP VENTAS" }}
      />
      <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{ title: "Historial Pacientes" }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "Agregar nuevo paciente" }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "Datos de paciente" }}
      />
       <Stack.Screen
        name="AttentionList"
        component={AttentionList}
        options={{ title: "Historial de consultas" }}
      />
       <Stack.Screen
        name="CreateAttentionScreen"
        component={CreateAttentionScreen}
        options={{ title: "Agregar nueva consulta" }}
      />
      <Stack.Screen
       name="CreateAttentionScreenListUser"
       component={CreateAttentionScreenListUser}
       options={{ title: "Seleccionar Paciente" }}
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

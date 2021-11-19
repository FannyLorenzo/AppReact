import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from './screens/SignUp';
import Login from './screens/Login';
import CreateProductoScreen from "./screens/CreateProductoScreen";
import ProductoDetailScreen from "./screens/ProductoDetailScreen";
import ProductosList from "./screens/ProductosList";
import InicioScreen from "./screens/InicioScreen";
import PedidoList from "./screens/PedidoList"
import CreatePedidoScreen from "./screens/CreatePedidoScreen"
import CreatePedidoScreenListProducto from "./screens/CreatePedidoScreenListProducto"

const Stack = createStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="InicioScreen" component={InicioScreen} options={{ title: "APP VENTAS" }} />
                <Stack.Screen name="ProductosList" component={ProductosList} options={{ title: "Productos Ofertados" }} />
                <Stack.Screen name="CreateProductoScreen" component={CreateProductoScreen} options={{ title: "Nuevo producto" }} />
                <Stack.Screen name="ProductoDetailScreen" component={ProductoDetailScreen} options={{ title: "Datos de producto" }} />
                <Stack.Screen name="PedidoList" component={PedidoList} options={{ title: "Historial de compras" }} />
                <Stack.Screen name="CreatePedidoScreen" component={CreatePedidoScreen} options={{ title: "Agregar nueva compra" }} />
                <Stack.Screen name="CreatePedidoScreenListProducto" component={CreatePedidoScreenListProducto} options={{ title: "Seleccione un producto" }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
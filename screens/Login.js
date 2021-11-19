import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Button } from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';


const Login = props => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/login-register.jpg')}
                    resizeMode="center"
                    style={styles.image} />
                <Text style={styles.textTitle}>Bienvenido</Text>
                <Text style={styles.textBody}>Ingresa con una cuenta existente</Text>
                <View style={{ marginTop: 20 }} />
                <Inputs name="Correo Electrónico" icon="user" />
                <Inputs name="Contraseña" icon="lock" pass={true} />
                <View style={{ width: '90%' }}>
                    <Text style={[styles.textBody], { alignSelf: 'flex-end' }}>¿Olvidaste tu contraseña?</Text>
                </View>

                <Button
                    title="Ingresar"
                    onPress={() =>
                        props.navigation.navigate('InicioScreen')
                    }
                />

                {/* <Submit title=" Ingresar" color="#0148a4"/> */}



                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <Text style={styles.textBody}>¿Eres nuevo?</Text>
                    <Text style={[styles.textBody, { color: 'blue' }]} onPress={() => props.navigation.navigate('SignUp')}> Regístrate</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10
    },
    textTitle: {
        fontfamily: 'lucida grande',
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
        fontfamily: 'lucida grande',
        fontSize: 16
    }
});

export default Login
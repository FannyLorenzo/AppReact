import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';

const SignUp = props => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}> 
                <Image source={require('../assets/settings.jpg')} resizeMode="center" style={styles.image} />
                <Text style={styles.textTitle}>¡Empecemos!</Text>
                <Text style={styles.textBody}>Crea una cuenta para poder acceder</Text>
                <Inputs name="Nombres y Apellidos" icon="user" />
                <Inputs name="Número de Contacto" icon="phone" />
                <Inputs name="Email" icon="envelope" />
                <Inputs name="Contraseña" icon="lock" pass={true} />
                <Inputs name="Confirmar contraseña" icon="lock" pass={true} />
                <Submit color="#0251ce" title="Crear"/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textBody}>¿Ya tienes una cuenta?</Text>
                    <Text style={[styles.textBody, {color: 'blue'}]} onPress={() => props.navigation.navigate('Home')}> Ingresa aquí</Text>
                </View>
            </View>
        </ScrollView>    
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10,
    },
    textTitle: {
        fontSize: 40,
        fontfamily: 'lucida grande',
        marginVertical: 5
    },
    textBody: {
        fontSize: 16,
        fontfamily: 'lucida grande',
    }
});

export default SignUp;
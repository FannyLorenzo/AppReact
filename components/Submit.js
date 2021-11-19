import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Linking } from 'react-native';


const Account = props => {
    return (

        <TouchableOpacity style={[styles.container, { backgroundColor: props.color }]}>
            <Text style={styles.textTitle} >{props.title}</Text>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '50%',
        height: 45,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    textTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlignVertical: "center",
        textAlign: "center",
        marginVertical: 10,
        marginHorizontal: 5,
    }
});

export default Account;
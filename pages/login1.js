import React from 'react'
import { Button, TextInput, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

function Login1() {
    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.maintext} >First Login From</Text>
            </View>
            <View>
                <TextInput style={styles.email} placeholder='Enter Email' />
                <TextInput style={styles.email} placeholder='Enter Password' />
                <View style={styles.mybtn} >
                    <Button title='Login' />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: 'center',
    },
    maintext: {
        color:'white',
        top: 200,
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    email: {
        top: 250,
        paddingLeft: 10,
        color: 'white',
        borderRadius: 10,
        marginTop: 10,
        width: 250,
        backgroundColor: "black",
        borderColor: "#fffff0",
        borderWidth: 1,
    },
    mybtn: {
        borderRadius: 20,
        top: 290,
    }
})

export default Login1

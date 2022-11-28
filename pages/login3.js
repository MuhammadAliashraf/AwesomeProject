import React from 'react'
import { Button, TextInput, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

function Login3() {
    return (
        <View style={styles.container} >
            <View style={styles.div} >
                <View>
                    <Text style={styles.maintext} >Login From</Text>
                </View>
                <View>
                    <TextInput style={styles.email} placeholder='Enter Email' />
                    <TextInput style={styles.email} placeholder='Enter Password' />
                    <View style={styles.mybtn} >
                        <Button color='black' title='Login' />
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',

    },
    div:{
        bottom:30,
    },
    maintext: {
        color: 'black',
        top: 250,
        // right:1,
        fontSize: 40,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    email: {
        top: 250,
        paddingLeft: 10,
        color: 'black',
        borderRadius: 5,
        marginTop: 30,
        width: 250,
        // opacity:.3,
        backgroundColor: "lightgray",
        borderColor: "#fffff0",
        borderWidth: 1,
    },
    mybtn: {
        borderRadius: 20,
        top: 290,
    }
})

export default Login3

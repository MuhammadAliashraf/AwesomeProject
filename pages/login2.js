import React from 'react'
import { Button, TextInput, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

function Login2() {
    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.maintext} >Second Login From</Text>
            </View>
            <View>
                <TextInput style={styles.email} placeholder='Enter Email' />
                <TextInput style={styles.email} placeholder='Enter Password' />
                <View style={styles.mybtn} >
                    <Button color='hotpink' title='Login' />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        alignItems: 'center',
    },
    maintext: {
        top: 200,
        color:'black',
        fontSize: 30,
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
        backgroundColor: "lightpink",
        borderColor: "#fffff0",
        borderWidth: 1,
    },
    mybtn: {
        borderRadius: 20,
        top: 290,
    }
})

export default Login2

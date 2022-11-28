import React from 'react'
import { Button, TextInput, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

function Login4() {
    return (
        <View style={styles.container} >
            <View style={styles.div} >
                <View>
                    <Text style={styles.maintext} >Login 4</Text>
                    <View style={styles.introtext}  >
                        <Text style={styles.weltxt} >Welcome Back</Text>
                        <Text style={styles.smalltext} >Hello there,login to Continue!</Text>
                    </View>
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
        top: 200,
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        borderRadius: 20,
    },
    div: {
        bottom: 170,
    },
    maintext: {
        // bottom:90,
        color: 'white',
        top: 100,
        right: 40,
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    weltxt:{
        color:'black',
        top: 100,
        right: 40,
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    smalltext: {
        color: 'black',
        top: 100,
        right: 40,
        // fontSize: 30,
        fontWeight:'light',
        alignItems: 'center',
    },
    introtext:{
        top: 100,
        // right: 40,
    },
    email: {
        top: 250,
        paddingLeft: 10,
        color: 'white',
        borderRadius: 10,
        marginTop: 30,
        width: 250,
        // opacity:.3,
        backgroundColor: "black",
        borderColor: "#fffff0",
        borderWidth: 1,
    },
    mybtn: {
        borderRadius: 20,
        top: 290,
    }
})

export default Login4

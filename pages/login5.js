import React from 'react'
import { Button, TextInput, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

function Login5() {
    return (
        <View style={styles.container} >
            <View style={styles.div} >
                <View>
                    {/* <Text style={styles.maintext} >Login 4</Text> */}
                    <View style={styles.introtext}  >
                        <Text style={styles.bodymain} >Welcome Back Traders</Text>
                        <Text style={styles.bodysmall} >login to Continue!</Text>
                    </View>
                </View>
                <View  style={styles.txtinputs}  >
                    <TextInput style={styles.email} placeholder='Enter Email' />
                    <TextInput style={styles.email} placeholder='Enter Password' />
                    <View style={styles.mybtn} >
                        <Button color='paleturquoise' title='Login' />
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // top: 200,
        bottom: 500,
        flex: 1,
        backgroundColor: "paleturquoise",
        alignItems: 'center',
        borderRadius: 20,
    },
    div: {
        top: 500,
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
    bodymain: {
        color: 'white',
        top: 100,
        right: 40,
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    bodysmall: {
        color: 'black',
        top: 100,
        right: 40,
        // fontSize: 30,
        fontWeight: 'light',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    introtext: {
        // top: 10,
        left: 30,
        // justifyContent:'center',
        // alignContent:'center',
        alignItems: 'center',

    },
    txtinputs:{

    },
    email: {
        top: 250,
        paddingLeft: 10,
        color: 'paleturquoise',
        borderRadius: 10,
        marginTop: 30,
        width: 300,
        // opacity:.3,
        backgroundColor: "black",
        borderColor: "paleturquoise",
        borderWidth: 1,
    },
    mybtn: {
        borderRadius: 20,
        top: 290,
    }
})

export default Login5

import react from "react";
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';


const Additem = (props) => {
    return (
        <View style={styles.item} >
            <View style={styles.leftitem}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemtext}>{props.text}</Text>
            </View>
            <TouchableOpacity style={styles.edititem} ></TouchableOpacity>
            <View style={styles.deleteitem} ></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fffff0",
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    leftitem: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 10,
        height: 10,
        borderRadius: 15,
        backgroundColor: "#4b0082",
        marginRight: 10,
    },
    itemtext: {
        maxWidth: 180,
        color: "#000000",

    },
    edititem: {

    },
    deleteitem: {
        width: 10,
        height: 10,
        borderRadius: 15,
        backgroundColor: "#4b0082",
        marginRight: 10,
    },

});
export default Additem;
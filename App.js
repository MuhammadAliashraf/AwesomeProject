// import React from "react";
import react from "react";
import { Button, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from "react";
import Additem from "./components/additem";
import dismissKeyboard from "react-native/Libraries/Utilities/dismissKeyboard";
import Login1 from "./pages/login1";
import Login2 from "./pages/login2";
import Login3 from "./pages/login3";
import Login4 from "./pages/login4";
import Login5 from "./pages/login5";

const MyApp = () => {
  const [task, settask] = useState();
  const [list, setlist] = useState([]);
  const [isadd, setisadd] = useState(false);

  // setting list item in array 
  const handleChange = () => {
    setisadd(true);
    dismissKeyboard();
    // console.log(task);
    setlist([...list, task]);
    settask(null);
  }
  // delete item from list  
  const deleteitem = (index) => {
    let itemcopy = [...list];
    itemcopy.splice(index, 1);
    setlist(itemcopy);
  }

  //const delete All Items
  const delallitem = () => {
    setlist([]);
    setisadd(false);
  }



  return (
    // <Login1/>
    // <Login2/>
    // <Login3/>
    // <Login4 />
    // <Login5 />
    <View style={styles.container} >
      <View style={styles.taskwarapper}  >
        <View style={styles.title} >
          <Text style={styles.titeltext}>TODO APP</Text>
          <Button color='red' title="Delete All" disabled={false} onPress={delallitem}></Button>
        </View>
        {/* Here is over item  */}
        <View style={styles.items}>

          {isadd ?
            list.map((txt, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => deleteitem(index)}>
                  <Additem text={txt} />
                </TouchableOpacity>
              )
            }) :
            <View style={styles.beforeaddlist} >
              <Text style={styles.beforeaddlisttxt} >No item Add Yet</Text>
            </View>
          }
        </View>

      </View>
      {/* write text here */}
      <View style={styles.mainwrapper}  >
        <TextInput onChangeText={e => settask(e)} value={task} style={styles.writeyourtexthere} placeholder={"Write Your Task Here"} />
        <TouchableOpacity onPress={() => handleChange()} >
          <View style={styles.addwarapper}  >
            <Text style={styles.icontext} >+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b0082",
  },
  taskwarapper: {
    paddingTop: 70,
    paddingHorizontal: 20,

  },
  beforeaddlist: {
    fontSize: 10,
    fontWeight: "bold",
    // justifyContent:'center',
    // alignItems:'center'
  },
  beforeaddlisttxt:{
    // position:'absolute',
    top:250,
    left:110,
    // width:100,
    // alignItems:'center',

  },
  titeltext: {
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {
    marginTop: 15,

  },
  mainwrapper: {
    position: 'absolute',
    bottom: 10,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  writeyourtexthere: {
    // // color:'#00000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#8a2be2",
    borderColor: "#fffff0",
    borderWidth: 1,
    borderRadius: 30,
    width: 250,
    height: 50,
  },
  addwarapper: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icontext: {
    paddingHorizontal: 40,
    color: "#000000",
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
    // justifyContent:'center',
  },
  delallitem: {
    width: 25,
    height: 25,
    backgroundColor: '#ff0000',
    borderRadius: 15,
  },
})



export default MyApp;
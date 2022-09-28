import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Scr2({navigation}) {
  const blue = require('../assets/vs1.png');
  const red = require('../assets/vs2.png');
  const white = require('../assets/vs3.png');
  const black = require('../assets/vs4.png');
  var [link, setLink] = useState(blue);
  return (
    <View style={styles.container}>
        <View>
            <Image style={{width:200, height:250}} source={link}></Image>
        </View>
        <View style={styles.container_1}>
          <Text style={{fontSize:18}} > Chọn một màu bên dưới:</Text>
          <TouchableOpacity onPress={()=>setLink(link = red)} style = {{height:100,width:100,backgroundColor:'red'}}></TouchableOpacity>
          <TouchableOpacity onPress={()=>setLink(link = white)} style = {{height:100,width:100,backgroundColor:'#ccccff'}}></TouchableOpacity>
          <TouchableOpacity onPress={()=>setLink(link = black)} style = {{height:100,width:100,backgroundColor:'black'}}></TouchableOpacity>
          <TouchableOpacity onPress={()=>setLink(link = blue)} style = {{height:100,width:100,backgroundColor:'blue'}}></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Option1",{link:link})} style={styles.container_2}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container_1:{
    height: 450,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container_2:{
    width:'90%',
    backgroundColor:'blue',
    borderWidth:2,
    borderRadius:20,
    height:50,
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'white'
  }
});


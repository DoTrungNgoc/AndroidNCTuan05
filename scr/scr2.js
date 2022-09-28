import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Scr1({navigation}) {
  return (
    <View style={styles.container}>
        <View>
            <Image style={{width:200, height:250}} source={require('./assets/vsmart_live_xanh_1.png')}></Image>
        </View>
        <View style={styles.container_1}>
          <Text style={{fontSize:18}} > Chọn một màu bên dưới:</Text>
          <TouchableOpacity style = {{height:100,width:100,backgroundColor:'red'}}></TouchableOpacity>
          <TouchableOpacity style = {{height:100,width:100,backgroundColor:'#ccccff'}}></TouchableOpacity>
          <TouchableOpacity style = {{height:100,width:100,backgroundColor:'black'}}></TouchableOpacity>
          <TouchableOpacity style = {{height:100,width:100,backgroundColor:'blue'}}></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.container_2}>
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


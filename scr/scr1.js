import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useRoute } from '@react-navigation/native';

export default function Scr1({navigation}) {
  const route = useRoute();
  const blue = require('../assets/vs1.png');
  var [link, setLink] = useState(blue);

  useEffect(() => {
    if (route.params != null){
      setLink(route.params.link);
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.container_1}>
          <Image style ={{width:300,height:400}} source={link}></Image>
      </View>
      <View style={styles.container_2}>
          <View style={styles.container_2_1}>
              <Text style={{fontSize:17, fontWeight:'bold'}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          </View>
          <View style={styles.container_2_2}>
              <View style={styles.container_2_2_1}>
                  <Image style={{width:27,height:27}} source={require('../assets/Star.png')}></Image>
                  <Image style={{width:27,height:27}} source={require('../assets/Star.png')}></Image>
                  <Image style={{width:27,height:27}} source={require('../assets/Star.png')}></Image>
                  <Image style={{width:27,height:27}} source={require('../assets/Star.png')}></Image>
                  <Image style={{width:27,height:27}} source={require('../assets/Star.png')}></Image>
              </View>
              <View style={styles.container_2_2_2}>
                  <Text style={{fontSize:17}}>(Xem 828 đánh giá)</Text>
              </View>
          </View>
          <View style={styles.container_2_2}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>1.790.000 đ</Text>
              <Text style={{fontSize:18, marginLeft:80, textDecorationLine:'line-through'}}>1.790.000 đ</Text>
          </View>
          <Text style={{color:'red',fontWeight:'bold',fontSize:17,marginTop:20}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Option2')} activeOpacity={0.5} style={styles.container_2_3}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>4 MÀU-CHỌN MÀU      {'>'}</Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.container_3}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>CHỌN MUA</Text>
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
  container_1: {
    height: 400,
    width: '80%',
  },
  container_2: {
    width:'90%',
    direction:'column',
  },
  container_2_1: {
    alignItems: 'center'
  },
  container_2_2: {
    marginTop: 20,
    width:'90%',
    display: 'flex',
    flexDirection:'row'
  },
  container_2_2_1:{
    flexDirection: 'row',
  },
  container_2_2_2:{
    marginLeft: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container_2_3:{
    borderWidth:2,
    borderRadius:20,
    height:40,
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container_3:{
    width:'90%',
    backgroundColor:'red',
    borderWidth:2,
    borderRadius:20,
    height:50,
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'white'
  }
});

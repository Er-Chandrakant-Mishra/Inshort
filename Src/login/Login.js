import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import React, { useState } from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/Fontisto';
import Iconsss from 'react-native-vector-icons/Octicons';
import Iconssss from 'react-native-vector-icons/Feather';
import Iconsssss from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';






const Login = () => {
  const [show_password_click , setShow_password_click] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: '10%',
        }}>
        <Icons
          name="left"
          size={32}
          color="#FFFFFF"
          style={{marginTop: '2%', marginLeft: '-45%'}}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginLeft: '-35%',
          }}>
          Login
        </Text>
      </View>
      <View style={{bottom:'-5%'}}>
        <View style={styles.login_form_container}>
          <View style={styles.login_form}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <Iconss name="email" size={20} color="#FFFFFF" style={{bottom:'-2%'}}  />     
                          
              <TextInput placeholder='Email' placeholderTextColor='#FFFFFF'  style={{ borderBottomColor:'#12325D',width:'90%',height:37,color:'#FFFFFF'}}  />
            </View>
            <View style={{borderWidth:1,borderColor:'#12325D',width:'95%',backgroundColor:'#12325D'}} />


            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:'10%'}}>
                  <Iconsss name="lock" size={20} color="#FFFFFF" style={{bottom:'-2%'}}  />     
                          
              <TextInput placeholder='Password' placeholderTextColor='#FFFFFF' secureTextEntry={!show_password_click} style={{ borderBottomColor:'#12325D',width:'90%',height:37,color:'#FFFFFF',marginLeft:'4%'}}  />
              <TouchableOpacity onPress={() => setShow_password_click(!show_password_click)}>
                 <Iconssss name= {show_password_click ? "eye-off" : "eye"} size={20} color="#FFFFFF" style={{left:'-90%'}} />
              </TouchableOpacity>
            </View>
            <View style={{borderWidth:1,borderColor:'#12325D',width:'95%',backgroundColor:'#12325D'}} />
            <TouchableOpacity style={{width:'95%',height:'23%',backgroundColor:'#FFFFFF',borderRadius:25,justifyContent:'center',bottom:'-20%'}}>
                <Text style={{alignSelf:'center',fontWeight:'bold'}}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.login_with_google}>
            <View>
               <Text style={{color:'#FFFFFF',textAlign:'center',marginLeft:'11%'}}>or</Text>
            </View>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',backgroundColor:'#11325C',borderRadius:22,width:'80%',left:'40%',marginTop:'5%'}}>
               <Image source={require('../Assets/Google_Icon.webp')} style={styles.google_logo} />
               <Text style={{color:'#FFFFFF',marginTop:'3%',fontSize:18}}>Login with google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',backgroundColor:'#11325C',borderRadius:22,width:'80%',left:'40%',marginTop:'5%'}}>
               <Iconsssss name='mobile-phone' size={35} color="#FFFFFF" />
               <Text style={{color:'#FFFFFF',marginTop:'2%',fontSize:18,left:'40%'}}>Login with number</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:'4%'}}>
            <Text style={{color:'#FFFFFF',marginLeft:'-3%',left:'-40%'}}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('register')}>
              <Text style={{color:'#3C7EEE',fontSize:16}}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00224F',
    // justifyContent:'center'
  },
  login_form_container: {
    width: '80%',
    height: '75%',
    // backgroundColor: 'red',
    alignSelf: 'center',
    // bottom:'-30%'
  },
  login_form: {
    margin:'5%',
    padding:'5%'
  },
  login_with_google: {
    width:'100%',
    left:'-8%'
  },
  login_with_google_container: {},
  google_logo : {
    width:40,
    height:40

  },

});

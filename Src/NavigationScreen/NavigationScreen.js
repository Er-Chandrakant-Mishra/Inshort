import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListOfData from '../ListOfData/ListOfData';
import NewsDetails from '../NewsDetails/NewsDetails';
import Discover from '../Discover/Discover';
import Options from '../Options/Options';
import MainScreen from '../MainScreen/MainScreen';
import Notification from '../notification/Notification';
import Login from '../login/Login';
import Register from '../register/Register';
import Splash_screen from '../splash_screen/Splash_screen';
import Education_screen from '../education_screen/Education_screen';
import More_model from '../more_model/More_model';

const Stack = createStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={Splash_screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListOfData"
          component={ListOfData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='NewsDetails'
          component={NewsDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Discover'
          component={Discover}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='register'
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name='Education'
          component={Education_screen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name='More_model'
          component={More_model}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;

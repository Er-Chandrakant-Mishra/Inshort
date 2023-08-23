// import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListOfData from '../ListOfData/ListOfData';
import NewsDetails from '../NewsDetails/NewsDetails';
import Discover from '../Discover/Discover';
import Options from '../Options/Options';
import MainScreen from '../MainScreen/MainScreen';



const Stack = createStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="MainScreenCom" component={MainScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='options' component={Options} /> */}
        <Stack.Screen name="MainScreen" component={ListOfData} options={{ headerShown: false }} />
        <Stack.Screen name='NewsDetails' component={NewsDetails} options={{ headerShown: false }} />
        <Stack.Screen name='Discover' component={Discover} options={{ headerShown: false }} />
        {/* <Stack.Screen name='options' component={Options} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationScreen;
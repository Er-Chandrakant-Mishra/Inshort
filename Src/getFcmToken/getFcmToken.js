import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';

const getFcmToken = async () => {
    
    // useEffect(() => {
    //     const unsubscribe = messaging().onMessage(async remoteMessage => {
    //       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    //     });
    
    //     return unsubscribe;
    //   }, []);


    try {
        const token = await messaging().getToken();
        console.log('FCM Token:', token); // Log the token for debugging purposes
        return token;
    } catch (error) {
        console.log('error in generateFcmToken:-', error);
    }
};

export default getFcmToken;

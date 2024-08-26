import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';
import createChannel from './Src/createChannel/createChannel';

// Create notification channel
createChannel();

// Handle background notification events
notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification } = detail;

  if (type === EventType.DISMISSED) {
    console.log('User dismissed notification', notification);
  } else if (type === EventType.PRESS) {
    console.log('User pressed notification', notification);
  }
});

// Register background message handler for Firebase Messaging
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
  await notifee.displayNotification({
    title: remoteMessage.notification.title || 'No title',
    body: remoteMessage.notification.body || 'No body',
    android: {
      sound: 'default',
      importance: AndroidImportance.HIGH,
      vibrationPattern: [300, 500], // Vibration pattern in milliseconds
      channelId: 'default', // Ensure you have created a channel with this ID
    },
    ios: {
      sound: 'default',
    },
  });
});

AppRegistry.registerComponent(appName, () => App);

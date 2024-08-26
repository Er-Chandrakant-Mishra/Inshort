import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

const PushNotification = async () => {

  // Request user permissions
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      await getFcmToken();
      messageHandler();
    }
  };

  // Get FCM token
  const getFcmToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log('FCM Token:', token); // Log the token for debugging purposes
    } catch (error) {
      console.log('Error in generateFcmToken:', error);
    }
  };

  // Show local notification with sound and vibration
  const showLocalNotification = async (notification) => {
    if (!notification) return;

    await notifee.displayNotification({
      title: notification.title || 'No title',
      body: notification.body || 'No body',
      android: {
        sound: 'default',
        // importance: AndroidImportance.HIGH,
        vibrationPattern: [300, 500], // Vibration pattern in milliseconds
        channelId: 'default', // Ensure you have created a channel with this ID
      },
      ios: {
        sound: 'default',
      },
    });
  };

  // Handle foreground messages
  const messageHandler = () => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      showLocalNotification(remoteMessage.notification);
    });

    return unsubscribe;
  };

  await requestUserPermission();
};

export default PushNotification;

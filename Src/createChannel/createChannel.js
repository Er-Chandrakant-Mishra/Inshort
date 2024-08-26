import notifee, { AndroidImportance } from '@notifee/react-native';

const createChannel = async () => {
  await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    sound: 'default',
    importance: AndroidImportance.HIGH,
  });
};

export default createChannel;

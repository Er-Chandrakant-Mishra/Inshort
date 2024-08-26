import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Splash_screen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('ListOfData');
    }, 3000); // 3 seconds delay
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://pratibha.eenadu.net//images/logos/pratibha-logo-new.png',
        }}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E3A55', // Updated background color
  },
  logo: {
    width: 200, // Adjusted size
    height: 200, // Adjusted size
    borderRadius: 100, // Makes the image circular (half of width/height)
    borderWidth: 2, // Optional: Add a border to the circle
    borderColor: '#FFFFFF', // Optional: Border color
    backgroundColor: '#FFFFFF'
  },
});

export default Splash_screen;

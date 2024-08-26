import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Header from './Src/Header/Header';
import Footer from './Src/Footer/Footer';
import {ListOfData} from './Src/ListOfData/ListOfData';
import NavigationScreen from './Src/NavigationScreen/NavigationScreen';
import {Provider} from 'react-redux';
import Store from './Src/redux/store/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        {/* {showHeaderFooter && <Header />} */}
        <View style={{flex: 1}}>
          {/* <ListOfData /> */}
          <NavigationScreen />
        </View>
        {/* {showHeaderFooter && <Footer />} */}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default App;

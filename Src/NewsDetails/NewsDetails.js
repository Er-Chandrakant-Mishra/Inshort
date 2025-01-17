import { View, Text } from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const NewsDetails = ({ route }) => {
  const { uri } = route.params;
  return (
    <>

      <WebView
        source={{ uri: uri}}
      />

    </>
  )
}

export default NewsDetails

// https://api.eenadu.net/newmobileapis/hometabs.php?stateid=99
// https://assets.eenadu.net/appreactdata/hometookiga_news.json
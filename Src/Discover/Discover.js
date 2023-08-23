import { View, Text } from 'react-native'
import React from 'react'
import HeaderOFDiscover from './HeaderOFDiscover';

const Discover = ({ selectedLanguage, setSelectedLanguage }) => {
  return (
    <View>
      <HeaderOFDiscover selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
    </View>
  )
}

export default Discover;
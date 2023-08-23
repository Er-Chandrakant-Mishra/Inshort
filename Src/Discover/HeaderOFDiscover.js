import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const HeaderOFDiscover = ({ selectedLanguage, setSelectedLanguage }) => {
    // const [optionsComponet,setOptionsComponent] = useState(false);
    const navigation = useNavigation();

    const handleLanguageChange = () => {
        setSelectedLanguage(handleLanguageSelection(selectedLanguage));
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('options')}>
                <Icon name="setting" size={20} color='#0A90F6' />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Discover</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.Myfeed}>
                    <Text>My Feed</Text>
                    <Icon name="right" size={15} color='#0A90F6' style={{paddingLeft:3}} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderOFDiscover;

const styles = StyleSheet.create({
    container:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     padding:5

    },
    Myfeed : {
        flexDirection:'row',
        alignItems:'center',
    }
})
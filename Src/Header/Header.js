import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  DARK_BG_COLOR,
  LIGHT_BG_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
} from '../redux/utils/Colors';
import { english_in_english, english_in_telugu, letest_news_in_english, letest_news_in_telugu, telugu_in_english, telugu_in_telugu } from '../redux/utils/Strings';
import { changeLanguage } from '../redux/languageSlice/LanguageSlice';


const Header = ({onSelectedLanguage, selectedLanguage}) => {
  const dispatch = useDispatch();

  const THEME = useSelector(state => state.theme);
  const LANGUAGE = useSelector(state => state.language);

  const text_color = {color: THEME.data == 'light' ? 'black' : DARK_TEXT_COLOR};

  const handleLanguageChange = useCallback(
    selectedLanguage => {
      onSelectedLanguage(selectedLanguage);
    },
    [onSelectedLanguage],
  );

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: THEME.data == 'light' ? '#ffffff' : DARK_BG_COLOR},
      ]}>
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.discover}
          onPress={() => handleLanguageChange('letest_news')}>
          {/* <Icon name="left" size={15} color="#0A90F6" /> */}
          <Text
            style={[
              styles.text,
              {width: 80, marginBottom: 5, letterSpacing: 1},
              selectedLanguage === 'letest_news' && styles.selectedText,
              text_color,
            ]}>
           {LANGUAGE.data == 'telugu' ? letest_news_in_telugu : letest_news_in_english}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.item, styles.centerItem]}>
        <TouchableOpacity
          style={styles.MyFeed}
          onPress={() => {
            handleLanguageChange('telugu')
            dispatch(changeLanguage('telugu'));
          }}>
          <Text
            style={[
              styles.text,
              {letterSpacing: 2},
              selectedLanguage === 'telugu' && styles.selectedText,
              text_color,
            ]}>
          {LANGUAGE.data == 'telugu' ? telugu_in_telugu : telugu_in_english}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.settingIcon}
          onPress={() => {
            handleLanguageChange('english')
            dispatch(changeLanguage('english'));
          }}>
          {/* <Icon name="setting" size={20} color='#0A90F6' /> */}
          {/* <Text style={{color:'black',fontWeight:"bold",  fontSize:12}}>lang:-{selectedLanguage}</Text> */}
          <Text
            style={[
              {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 12,
                letterSpacing: 1,
              },
              selectedLanguage === 'english' && styles.selectedText,
              text_color,
            ]}>
             {LANGUAGE.data == 'telugu' ? english_in_telugu : english_in_english}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 18,
    padding: 20,
    // backgroundColor: '#ffffff',
    borderColor: 'lightgray',
    borderBottomWidth: 2,
    // borderBottomLeftRadius:10,
    borderBottomColor: 'red',
    elevation: 5,
  },
  item: {
    flex: 1,
  },
  centerItem: {
    justifyContent: 'center',
  },
  text: {
    marginLeft: 5,
    // color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
  selectedText: {
    borderBottomWidth: 2,
    borderBottomColor: '#0A90F6', // Blue underline
  },
  discover: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 65,
    alignItems: 'center',
  },
  MyFeed: {
    width: 60,
  },
  iconContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    position: 'relative',
    right: 30,
  },
});

export default Header;

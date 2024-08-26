import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/Ionicons';
import Iconsss from 'react-native-vector-icons/Feather';
import Iconssss from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { DARK_BG_COLOR, LIGHT_BG_COLOR, DARK_TEXT_COLOR, LIGHT_TEXT_COLOR } from '../redux/utils/Colors';
import { education_news_in_english, education_news_in_telugu, model_paper_in_english, model_paper_in_telugu, more_in_english, more_in_telugu, notifications_in_english, notifications_in_telugu } from '../redux/utils/Strings';

const Footer = ({handleModalVisible}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const THEME = useSelector(state => state.theme);
  const LANGUAGE = useSelector(state => state.language);

  const toggleModal = () => {
    const newModalVisible = !modalVisible;
    setModalVisible(newModalVisible);
    handleModalVisible(newModalVisible); // Notify parent about modal state change
  };

  const handleModalToggle = useCallback(() => {
    const newModalVisible = !modalVisible;
    setModalVisible(newModalVisible);
    handleModalVisible(newModalVisible);
  }, [modalVisible, handleModalVisible]);

  return (
    <View style={[styles.container, {backgroundColor:THEME.data == 'light' ? '#ffffff' :DARK_BG_COLOR}]}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Education')}>
        <View>
          <Iconssss name="book-education" size={18}  color={THEME.data== 'light'? '#0A90F6': DARK_TEXT_COLOR } />
        </View>
        <Text style={[styles.text , {color:THEME.data== 'light'? LIGHT_TEXT_COLOR: DARK_TEXT_COLOR }]}>{LANGUAGE.data == 'telugu' ? education_news_in_telugu : education_news_in_english}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Notification')}>
        <View>
          <Iconss name="notifications" size={18} color={THEME.data== 'light'? '#0A90F6': DARK_TEXT_COLOR }  />
        </View>
        <Text style={[styles.text , {color:THEME.data== 'light'? LIGHT_TEXT_COLOR: DARK_TEXT_COLOR }]}>{LANGUAGE.data == 'telugu' ? notifications_in_telugu : notifications_in_english}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <View>
          <Iconss name="newspaper" size={18} color={THEME.data== 'light'? '#0A90F6': DARK_TEXT_COLOR }  />
        </View>
        <Text style={[styles.text, {color:THEME.data== 'light'? LIGHT_TEXT_COLOR: DARK_TEXT_COLOR }]}>{LANGUAGE.data == 'telugu' ? model_paper_in_telugu : model_paper_in_english}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        // onPress={handleModalToggle}
        onPress={
            // () => navigation.navigate('More_model')
                  toggleModal
                }
        >
        <View>
          <Iconsss name="more-horizontal" size={22}  color={THEME.data== 'light'? '#0A90F6': DARK_TEXT_COLOR } />
        </View>
        <Text style={[styles.text , {color:THEME.data== 'light'? LIGHT_TEXT_COLOR: DARK_TEXT_COLOR }]}>{LANGUAGE.data == 'telugu' ? more_in_telugu : more_in_english}</Text>
      </TouchableOpacity>

      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>More Options</Text>
            <View style={styles.modalOptionsContainer}>
              <TouchableOpacity
                style={styles.modalOptionButton}
                onPress={() => {}}>
                <Text style={styles.modalOptionText}>Preferences</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalOptionButton}
                onPress={() => {}}>
                <Text style={styles.modalOptionText}>App Info</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalOptionButton}
                onPress={() => {}}>
                <Text style={styles.modalOptionText}>Share App</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalOptionButton}
                onPress={() => {}}>
                <Text style={styles.modalOptionText}>Privacy Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalOptionButton}
                onPress={() => {}}>
                <Text style={styles.modalOptionText}>Terms & Conditions</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalOptionButton}
                onPress={() => {}}>
                <Text style={styles.modalOptionText}>Feedback</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
  },
  text: {
    marginTop: 5,
    fontSize: 11,
    color: 'black',
    fontWeight: 'bold',
  },
  modalContainer: {
    // flex: 1,
    // width:'100%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    bottom: '-60%',
  },
  modalContent: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalOptionButton: {
    width: '45%',
    paddingVertical: 10,
    marginVertical: 5,
    backgroundColor: '#0A90F6',
    borderRadius: 5,
    alignItems: 'center',
  },
  modalOptionText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    color: '#0A90F6',
    fontSize: 16,
  },
});

export default Footer;

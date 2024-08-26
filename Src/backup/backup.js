import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import Iconss from 'react-native-vector-icons/Entypo';
import App_preferences from '../app_preferences/App_preferences';
import { useSelector } from 'react-redux';
import { LIGHT_BG_COLOR } from '../redux/utils/Colors';

const Preferences = ({ preferencesVisible, handleClosePreferences }) => {
  const [App_preference_visible, setApp_preference_visible] = useState(false);

  const THEME = useSelector(state => state.theme);

  const handle_app_preference_Press = () => {
    setApp_preference_visible(true);
  };

  const handleOverlayClose = () => {
    setApp_preference_visible(false);
  };

  return (
    <Modal
      transparent={true}
      visible={preferencesVisible}
      animationType="slide"
      onRequestClose={handleClosePreferences}
    >
      <TouchableWithoutFeedback onPress={handleClosePreferences}>
        <View style={[styles.container , {backgroundColor:THEME.data == 'light' ? LIGHT_BG_COLOR:'rgba(0,0,0,0.5)'}]}>
          <TouchableWithoutFeedback>
            <View style={styles.content}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleClosePreferences}
              >
                <Iconss name="cross" size={30} color="#0A90F6" />
              </TouchableOpacity>
              <Text style={styles.title}>Preferences</Text>
              <View style={styles.optionRow}>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => {}}
                >
                  <Text style={styles.optionText}>Content</Text>
                  <Text style={styles.optionText}>Preferences</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => {}}
                >
                  <Text style={styles.optionText}>Notification</Text>
                  <Text style={styles.optionText}>Preferences</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={handle_app_preference_Press}
                >
                  <Text style={styles.optionText}>App</Text>
                  <Text style={styles.optionText}>Preferences</Text>
                </TouchableOpacity>
              </View>
              {App_preference_visible && (
                <View style={styles.overlay}>
                  <App_preferences />
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    width: '100%',
    height: '40%',
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  optionButton: {
    width: '30%',
    height: 70,
    backgroundColor: '#0A90F6',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayCloseButton: {
    position: 'absolute',
    bottom: 20,
    padding: 10,
    backgroundColor: '#0A90F6',
    borderRadius: 5,
  },
  overlayCloseText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Preferences;

import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../redux/themeSlice/ThemeSlice';
import { DARK_BG_COLOR, LIGHT_BG_COLOR, DARK_TEXT_COLOR, LIGHT_TEXT_COLOR } from '../redux/utils/Colors';

const App_preferences = () => {
  const systemColorScheme = useColorScheme(); // Get the system theme
  const THEME = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [theme, setTheme] = useState(THEME.data); // Initialize theme with the value from Redux

  useEffect(() => {
    setTheme(THEME.data); // Update theme when the Redux state changes
  }, [THEME.data]);

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    dispatch(changeTheme(selectedTheme));
  };

  return (
    <View style={[styles.container, { backgroundColor: THEME.data === 'light' ? LIGHT_BG_COLOR : DARK_BG_COLOR }]}>
      <Text style={[styles.text, { color: THEME.data === 'light' ? LIGHT_TEXT_COLOR : DARK_TEXT_COLOR, top: '-15%' }]}>
        {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
      </Text>
      <View style={styles.switchContainer}>
        <View style={styles.switchRow}>
          <Text style={[styles.text, { color: THEME.data === 'light' ? LIGHT_TEXT_COLOR : DARK_TEXT_COLOR }]}>
            Light Mode
          </Text>
          <Switch
            value={theme === 'light'}
            onValueChange={() => toggleTheme('light')}
            thumbColor={theme === 'light' ? 'green' : '#f4f3f4'}
            trackColor={{ false: '#f4f3f4', true: 'green' }}
            style={styles.switch} // Added style for the switch
          />
        </View>
        <View style={styles.switchRow}>
          <Text style={[styles.text, { color: THEME.data === 'light' ? LIGHT_TEXT_COLOR : DARK_TEXT_COLOR }]}>
            Dark Mode
          </Text>
          <Switch
            value={theme === 'dark'}
            onValueChange={() => toggleTheme('dark')}
            thumbColor={theme === 'dark' ? 'green' : '#f4f3f4'}
            trackColor={{ false: '#f4f3f4', true: 'green' }}
            style={styles.switch} // Added style for the switch
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginRight: 10,
  },
  switchContainer: {
    width: '100%',
    alignItems: 'center',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
    left: '80%',
  },
  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }], // Adjust the size of the switch
  },
});

export default App_preferences;

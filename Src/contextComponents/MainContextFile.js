import React, { createContext, useContext, useState, useEffect } from 'react';
import { View, Text, useColorScheme } from 'react-native';
import App from '../../App';


// Create a Context for the theme
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to provide the theme context
const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme(); // Get the system theme
  const [theme, setTheme] = useState(systemColorScheme);

  useEffect(() => {
    setTheme(systemColorScheme); // Automatically apply system theme on load
  }, [systemColorScheme]);

  const setLightMode = () => setTheme('light');
  const setDarkMode = () => setTheme('dark');
  const setSystemMode = () => setTheme(systemColorScheme);

  const value = {
    theme,
    setLightMode,
    setDarkMode,
    setSystemMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      <View style={{ flex: 1, backgroundColor: theme === 'dark' ? '#333' : '#FFF' }}>
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

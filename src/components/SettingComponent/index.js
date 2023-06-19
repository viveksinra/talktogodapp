import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import OtherComponent from './OtherComponent';
import ThemeSelector from './ThemeSelector';
import LanguageSelector from './LanguageSelector';

const App = () => {
  return (
    <LinearGradient colors={['#FFFFFF', '#D9E4F5']} style={styles.container}>
      {/* <OtherComponent /> */}
      <ThemeSelector />
      <LanguageSelector />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

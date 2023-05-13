import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const SettingComponent = () => {
  const [selectedTheme, setSelectedTheme] = useState('System');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const [isThemeModalVisible, setThemeModalVisible] = useState(false);
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);

  const handleThemeSelection = (theme) => {
    setSelectedTheme(theme);
    setThemeModalVisible(false);
  };

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
    setLanguageModalVisible(false);
  };

  return (
    <LinearGradient colors={['#FFFFFF', '#D9E4F5']} style={styles.container}>
    
      <View style={styles.option}>
        <View style={styles.optionContent}>
          <View style={styles.optionTextContainer}>
            <Ionicons name="person-outline" size={24} color="black" />
            <Text style={styles.optionText}>Account</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </View>
      </View>
      <View style={styles.option}>
        <View style={styles.optionContent}>
          <View style={styles.optionTextContainer}>
            <Ionicons name="chatbubbles-outline" size={24} color="black" />
            <Text style={styles.optionText}>Chats</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </View>
      </View>
      <View style={styles.option}>
        <View style={styles.optionContent}>
          <View style={styles.optionTextContainer}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Text style={styles.optionText}>Notifications</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </View>
      </View>
      <View style={styles.option}>
        <View style={styles.optionContent}>
          <View style={styles.optionTextContainer}>
            <Ionicons name="help-circle-outline" size={24} color="black" />
            <Text style={styles.optionText}>Help</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </View>
      </View>
      <TouchableOpacity
        style={styles.option}
        onPress={() => setThemeModalVisible(true)}
      >
        <View style={styles.optionContent}>
          <View style={styles.optionTextContainer}>
            <Ionicons name="color-palette-outline" size={24} color="black" />
            <Text style={styles.optionText}>Theme</Text>
          </View>
          <Text style={styles.selectedText}>{selectedTheme}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => setLanguageModalVisible(true)}
      >
        <View style={styles.optionContent}>
          <View style={styles.optionTextContainer}>
            <Ionicons name="language-outline" size={24} color="black" />
<Text style={styles.optionText}>Language</Text>
</View>
<Text style={styles.selectedText}>{selectedLanguage}</Text>
</View>
</TouchableOpacity>  
{/* Theme Selection Modal */}
<Modal visible={isThemeModalVisible} animationType="slide">
  <View style={styles.modalContainer}>
    <Text style={styles.modalTitle}>Select Theme</Text>
    <TouchableOpacity
      style={[
        styles.modalOption,
        selectedTheme === 'Light' && styles.selectedOption,
      ]}
      onPress={() => handleThemeSelection('Light')}
    >
      <Text
        style={[
          styles.modalOptionText,
          selectedTheme === 'Light' && styles.selectedOptionText,
        ]}
      >
        Light
        {selectedTheme === 'Light' && (
          <Ionicons
            name="checkmark-sharp"
            size={24}
            color="#00F"
            style={styles.checkmarkIcon}
          />
        )}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.modalOption,
        selectedTheme === 'Dark' && styles.selectedOption,
      ]}
      onPress={() => handleThemeSelection('Dark')}
    >
      <Text
        style={[
          styles.modalOptionText,
          selectedTheme === 'Dark' && styles.selectedOptionText,
        ]}
      >
        Dark
        {selectedTheme === 'Dark' && (
          <Ionicons
            name="checkmark-sharp"
            size={24}
            color="#00F"
            style={styles.checkmarkIcon}
          />
        )}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.modalOption,
        selectedTheme === 'System' && styles.selectedOption,
      ]}
      onPress={() => handleThemeSelection('System')}
    >
      <Text
        style={[
          styles.modalOptionText,
          selectedTheme === 'System' && styles.selectedOptionText,
        ]}
      >
        System
        {selectedTheme === 'System' && (
          <Ionicons
            name="checkmark-sharp"
            size={24}
            color="#00F"
            style={styles.checkmarkIcon}
          />
        )}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.modalCloseButton}
      onPress={() => setThemeModalVisible(false)}
    >
      <Text style={styles.modalCloseButtonText}>Close</Text>
    </TouchableOpacity>
  </View>
</Modal>


  {/* Language Selection Modal */}
  <Modal visible={isLanguageModalVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Select Language</Text>
        <TouchableOpacity
          style={[
            styles.modalOption,
            selectedLanguage === 'English' && styles.selectedOption,
          ]}
          onPress={() => handleLanguageSelection('English')}
        >
          <Text
            style={[
              styles.modalOptionText,
              selectedLanguage === 'English' && styles.selectedOptionText,
            ]}
          >
            English
            {selectedLanguage === 'English' && (
              <Ionicons
                name="checkmark-sharp"
                size={24}
                color="#00F"
                style={styles.checkmarkIcon}
              />
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.modalOption,
            selectedLanguage === 'Spanish' && styles.selectedOption,
          ]}
          onPress={() => handleLanguageSelection('Spanish')}
        >
          <Text
            style={[
              styles.modalOptionText,
              selectedLanguage === 'Spanish' && styles.selectedOptionText,
            ]}
          >
            Spanish
            {selectedLanguage === 'Spanish' && (
              <Ionicons
                name="checkmark-sharp"
                size={24}
                color="#00F"
                style={styles.checkmarkIcon}
              />
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.modalOption,
            selectedLanguage === 'French' && styles.selectedOption,
          ]}
          onPress={() => handleLanguageSelection('French')}
        >
          <Text
            style={[
              styles.modalOptionText,
              selectedLanguage === 'French' && styles.selectedOptionText,
            ]}
          >
            French
            {selectedLanguage === 'French' && (
              <Ionicons
                name="checkmark-sharp"
                size={24}
                color="#00F"
                style={styles.checkmarkIcon}
              />
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.modalCloseButton}
          onPress={() => setLanguageModalVisible(false)}
        >
          <Text style={styles.modalCloseButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>

</LinearGradient>
);
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      paddingVertical: 20,
      paddingHorizontal: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    option: {
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    optionContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    optionTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionText: {
      marginLeft: 15,
      fontSize: 18,
      color: '#333',
    },
    selectedText: {
      color: '#666',
      fontSize: 16,
    },
    modalContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
      textAlign: 'center',
    },
    modalOption: {
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    modalOptionText: {
      fontSize: 18,
      color: '#333',
    },
    selectedOption: {
      backgroundColor: '#E6F2FF',
    },
    selectedOptionText: {
      color: '#00F',
    },
    checkmarkIcon: {
      position: 'absolute',
      right: 10,
    },
    modalCloseButton: {
      marginTop: 20,
      alignSelf: 'center',
      backgroundColor: '#FF0000',
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    modalCloseButtonText: {
      fontSize: 18,
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  
  

export default SettingComponent;

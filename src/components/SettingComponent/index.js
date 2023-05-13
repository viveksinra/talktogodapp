import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingComponent = () => {
  const [selectedTheme, setSelectedTheme] = useState('system');
  const [selectedLanguage, setSelectedLanguage] = useState('');

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
    <View style={styles.container}>
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
        style={styles.modalOption}
        onPress={() => handleThemeSelection('Light')}
      >
        <Text style={styles.modalOptionText}>Light</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.modalOption}
        onPress={() => handleThemeSelection('Dark')}
      >
        <Text style={styles.modalOptionText}>Dark</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.modalOption}
        onPress={() => handleThemeSelection('System')}
      >
        <Text style={styles.modalOptionText}>System</Text>
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
        style={styles.modalOption}
        onPress={() => handleLanguageSelection('English')}
      >
        <Text style={styles.modalOptionText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.modalOption}
        onPress={() => handleLanguageSelection('Spanish')}
      >
        <Text style={styles.modalOptionText}>Spanish</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.modalOption}
        onPress={() => handleLanguageSelection('French')}
      >
        <Text style={styles.modalOptionText}>French</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.modalCloseButton}
        onPress={() => setLanguageModalVisible(false)}
      >
        <Text style={styles.modalCloseButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  </Modal>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
option: {
borderBottomWidth: 1,
borderBottomColor: '#f5f5f5',
paddingHorizontal: 15,
paddingVertical: 10,
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
fontSize: 16,
},
selectedText: {
color: 'blue',
fontWeight: 'bold',
},
modalContainer: {
flex: 1,
backgroundColor: '#fff',
justifyContent: 'center',
alignItems: 'center',
},
modalTitle: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 20,
},
modalOption: {
paddingVertical: 10,
borderBottomWidth: 1,
borderBottomColor: '#f5f5f5',
width: '100%',
alignItems: 'center',
},
modalOptionText: {
fontSize: 16,
},
modalCloseButton: {
marginTop: 20,
},
modalCloseButtonText: {
fontSize: 16,
color: 'blue',
},
});

export default SettingComponent;
import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MessageContext } from './../../../src/components/Message/MessageProvider';
import {useTranslation} from 'react-i18next';

const InputBox = ({godLink}) => {
  const { t } = useTranslation();

  const [newMessage, setNewMessage] = useState('');
  const { addMessage } = useContext(MessageContext);

  const generateRandomId = () => {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = padZero(now.getMonth() + 1);
    const day = padZero(now.getDate());
    const hours = padZero(now.getHours());
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());
    const randomNum = getRandomInt(100, 999);

    return year + month + day + hours + minutes + seconds + randomNum;
  };

  const padZero = (value) => {
    return value < 10 ? '0' + value : value;
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const onSend = () => {
    if (newMessage.trim()) {
      // Generate a new random ID
      const randomId = generateRandomId();

      // Create a new message object
      const message = {
        id: randomId,
        text: newMessage,
        createdAt: new Date(),
        user: {
          id: 'userId',
          name: 'Your Name',
        },
      };

      // Add the message using the context function
      addMessage(godLink, message);

      // Clear the input field
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Text Input */}
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        placeholder={t('input.placeholder')}
        style={styles.input}
      />
      {/* Icon */}
      <TouchableOpacity onPress={onSend} style={styles.send}>
        <MaterialIcons name="send" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
    fontSize: 14,
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InputBox;

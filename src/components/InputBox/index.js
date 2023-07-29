import React, { useState, useContext, useEffect, useRef } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Modal, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { MessageContext } from './../../../src/components/Message/MessageProvider';
import { useTranslation } from 'react-i18next';
import LottieView from 'lottie-react-native';
import axios from 'axios'; // Import the axios library
import { ActivityIndicator } from 'react-native';
  // Add the isAnalyzing state

const InputBox = ({ godLink }) => {
  const { t } = useTranslation();
  const { addMessage } = useContext(MessageContext);
  const [newMessage, setNewMessage] = useState('');
  const [recording, setRecording] = useState(null);
  const [isRecordingModalVisible, setRecordingModalVisible] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const timerIntervalRef = useRef(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);


  useEffect(() => {
    // Audio.requestPermissionsAsync();
    return () => {
      clearInterval(timerIntervalRef.current);
    };
  }, []);


  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      const newRecording = new Audio.Recording();
      await newRecording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await newRecording.startAsync();
      setRecordingModalVisible(true);
      setRecording(newRecording);
      setTimer(0);
      startTimer();
      setIsRecording(true);
    } catch (error) {
      console.log('Failed to start recording', error);
    }
  };
  
  const stopRecording = async () => {
    setIsAnalyzing(true)
    setRecordingModalVisible(false);
    clearInterval(timerIntervalRef.current);
    const uri  = recording.getURI();

    try {
      await recording.stopAndUnloadAsync();
      if (uri) {
      const file = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });

     let url = "http://192.168.1.12:2040/api/upload/appRecording/upload"

      const response = await axios.post(url, {file})
    
        const s3URL = response.data;
  
        // Use the S3 URL as needed
       
     
        const randomId = generateRandomId();
        const message = {
          id: randomId,
          text:  s3URL.transcription,
          audioUrl:s3URL.data,
          messageType:"audioAndText",
          createdAt: new Date(),
          user: {
            id: 'userId',
            name: 'Your Name',
          },
        };
        console.log('Recording uploaded:', message);

    setIsAnalyzing(false)
        addMessage(godLink, message);
        setNewMessage('');
      } else {
        console.log('No audio recording found');
      }
    } catch (error) {
      console.log('Failed to stop recording', error);
    }
    setRecording(null);
    setIsRecording(false);
  };
  
  
  
  

  const cancelRecording = async () => {
    clearInterval(timerIntervalRef.current);
    setRecordingModalVisible(false);
    if (recording) {
      try {
        await recording.stopAndUnloadAsync();
      } catch (error) {
        console.log('Failed to stop recording', error);
      }
    }
    setRecording(null);
    setIsRecording(false);
  };

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
    if (!recording && newMessage.trim()) {
      const randomId = generateRandomId();
      const message = {
        id: randomId,
        text: newMessage,
        audioUrl:s3URL.data,
        messageType:"audioAndText",
        createdAt: new Date(),
        user: {
          id: 'userId',
          name: 'Your Name',
        },
      };
      addMessage(godLink, message);
      setNewMessage('');
    } else if (!recording) {
      startRecording();
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const remainingSeconds = seconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    timerIntervalRef.current = interval;
  };

  return (
    <View style={styles.container}>
      {/* Text Input */}
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        placeholder={t('input.placeholder')}
        style={styles.input}onSend
      />
      {/* Icon */}
      {!newMessage ? (
        <TouchableOpacity onPress={startRecording} style={styles.startButton}>
          <MaterialIcons name="mic" size={22} color="white" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onSend} style={styles.send}>
          <MaterialIcons name="send" size={22} color="white" />
        </TouchableOpacity>
      )}

      {/* Recording Modal */}
      <Modal animationType="slide" transparent={true} visible={isRecordingModalVisible}>
        <View style={styles.recordingModalContainer}>
          <LottieView
            source={require('./../../../assets/animation/72428-yellow-mic.json')}
            autoPlay
            loop
            style={styles.recordingMicAnimation}
          />
          <Text style={styles.recordingModalMessage}>Please speak your message</Text>
          <Text style={styles.recordingModalTimer}>{formatTime(timer)}</Text>
          <View style={styles.recordingModalButtonsContainer}>
            <TouchableOpacity style={styles.recordingModalButtonRed} onPress={cancelRecording}>
              <Text style={styles.recordingModalButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recordingModalButtonGreen} onPress={stopRecording}>
              <Text style={styles.recordingModalButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Analysing Model */}

      <Modal animationType="slide" transparent={true} visible={isAnalyzing}>
        <View style={styles.recordingModalContainer}>
          {/* You can customize the content of this modal to show an appropriate message */}
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.recordingModalMessage}>Analyzing your recording...</Text>
        </View>
      </Modal>
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
    backgroundColor: 'blue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: 'green',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordingModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  recordingMicAnimation: {
    width: 100,
    height: 100,
  },
  recordingModalMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  recordingModalTimer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  recordingModalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  recordingModalButtonGreen: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
  },
  recordingModalButtonRed: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
  },
  recordingModalButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default InputBox;

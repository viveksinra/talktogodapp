import { View, TouchableOpacity, Animated, Image } from 'react-native'
import {useRoute, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react'
import bg from '../../assets/images/BG.png'
import { ImageBackground } from 'react-native'
import { StyleSheet } from "react-native";
import Message from '../components/Message'
import messages from '../../assets/data/messages.json'
import { FlatList } from 'react-native'
import InputBox from '../components/InputBox';
import { Ionicons } from '@expo/vector-icons';

const OneChatScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const buttonOpacity = new Animated.Value(1);
    const donateButtonImage = 'https://res.cloudinary.com/dncukhilq/image/upload/v1683721708/talktogod/imageUsedInApp/Donate_Button-_umdown.png'
    const handleDonatePress = () => {
        navigation.navigate('Donate');
      };

      
      useEffect(() => {
        navigation.setOptions({
            title: route.params.name,
            headerTitleStyle: {
                alignSelf: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                marginLeft: -20,
              },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 5,marginRight: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="ios-arrow-back" size={24} color="black" style={{ marginRight: 5 }} />
                <Image
                  source={{ uri: route.params.image }}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
              </TouchableOpacity>
            ),
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleDonatePress}
              style={{ marginRight: 10 }}
            >
              <Animated.View style={{ opacity: buttonOpacity }}>
                <Image
                  source={{ uri: donateButtonImage }}
                  style={{ width: 85, height: 25, marginLeft: 10 }}
                />
              </Animated.View>
            </TouchableOpacity>
          ),
        });
      }, [navigation, route.params.name, route.params.image]);
      

      
      useEffect(() => {
        const animateButton = () => {
          Animated.loop(
            Animated.sequence([
              Animated.timing(buttonOpacity, {
                toValue: 0.5,
                duration: 1000,
                useNativeDriver: true,
              }),
              Animated.timing(buttonOpacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
              }),
            ])
          ).start();
        };
      
        animateButton();
      
        return () => {
          buttonOpacity.stopAnimation();
        };
      }, []);
      

  return (
    // <KeyboardAvoidingView 
    // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    // keyboardVerticalOffset={110}
    //     style={styles.bg}
    // >
        <View style={styles.bg}>
        <ImageBackground source={bg} style={styles.bg}>
            <FlatList 
            data={messages} 
            renderItem={({item}) => <Message message={item} />} 
            style={styles.list}
            inverted
            />
            <InputBox />
        </ImageBackground>
        </View>
    // </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
    },
})

export default OneChatScreen
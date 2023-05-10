import { View, Text, KeyboardAvoidingView, Platform, Image } from 'react-native'
import {useRoute, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react'
import bg from '../../assets/images/BG.png'
import { ImageBackground } from 'react-native'
import { StyleSheet } from "react-native";
import Message from '../components/Message'
import messages from '../../assets/data/messages.json'
import { FlatList } from 'react-native'
import InputBox from '../components/InputBox';

const OneChatScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
// useEffect(() => {
//     navigation.setOptions({ title:route.params.name})
// },[route.params.name])
useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
      headerTitleStyle: { alignSelf: 'center' },
      headerLeft: () => (
        <Image
          source={{ uri: route.params.image }}
          style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10, marginRight: 5 }}
        />
      ),
    });
  }, [navigation, route.params.name,route.params.image]);

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
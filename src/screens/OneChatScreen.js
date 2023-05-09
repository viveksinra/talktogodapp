import { View, Text } from 'react-native'
import React from 'react'
import bg from '../../assets/images/BG.png'
import { ImageBackground } from 'react-native'
import { StyleSheet } from "react-native";
import Message from '../components/Message'
import messages from '../../assets/data/messages.json'
import { FlatList } from 'react-native'

const OneChatScreen = () => {
  return (
        <ImageBackground source={bg} style={styles.bg}>
            <FlatList 
            data={messages} 
            renderItem={({item}) => <Message message={item} />} 
            style={styles.list}
            inverted
            />
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
    },
})

export default OneChatScreen
import {useState} from 'react';
import { View, Text } from 'react-native'
import React from 'react'
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const InputBox = () => {
  const [newMessage,setNewMessage] = useState('')
  const onSend = ( ) => {
      console.warn(newMessage);
      setNewMessage('')
  };

  return (
    <View style={styles.container}>
    {/* //  <SafeAreaView edges={['none']} style={styles.container}>  */}
      {/* Icons */}
      <AntDesign name="plus" size={24} color="royalblue"/>
      {/* Text Input */}
      <TextInput value={newMessage} onChangeText={setNewMessage} style={styles.input} placeholder='type your message..'/>
      {/* Icon */}
      <MaterialIcons onPress = {onSend} style={styles.send} name="send" size={22} color="white" />
     </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'whitesmoke',
        padding:5,
    },
    input:{
        flex:1,
        backgroundColor:'white',
        padding:5,
        paddingHorizontal:10,
        marginHorizontal: 10,

        borderRadius:50,
        borderColor:'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
        fontSize:14, 
    },
    send:{
        backgroundColor:'royalblue',
        padding:7,
        borderRadius:15,
        overflow:'hidden'
    }
})

export default InputBox
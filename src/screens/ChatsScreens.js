import { View, Text } from 'react-native'
import React from 'react'
import ChatListItem from './../components/ChatListItem'
import chats from '../../assets/data/chats.json'
import { FlatList } from 'react-native'

const ChatsScreens = () => {
  return (
    <FlatList
    data={chats}
    renderItem={({item}) => <ChatListItem chat={item}/>}  />
    // <ChatListItem chat={chat} />
    // <Text  >nEW vIVEK sING</Text>
  )
}

export default ChatsScreens
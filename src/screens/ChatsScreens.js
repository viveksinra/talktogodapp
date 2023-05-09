import { View, Text } from 'react-native'
import React from 'react'
import ChatListItem from './../components/ChatListItem'
import chats from '../../assets/data/chats.json'
import { FlatList } from 'react-native'

const chat = {
    id:"1",
    user:{
      image:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name:"Vivek SIngh",
    },
    lastMessage:{
      text:"thank you for your message🙂",
      createdAt:"05:30",
    }
  }
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
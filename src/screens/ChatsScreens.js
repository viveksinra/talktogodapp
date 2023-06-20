import { View, Text } from 'react-native'
import React from 'react'
import ChatListItem from './../components/ChatListItem'
import enChats from '../../assets/data/enChats.json'
import lastMsg from '../../assets/data/lastMsg.json'
// import hiChats from '../../assets/data/hiChats.json'
import { FlatList } from 'react-native'
import {useTranslation} from 'react-i18next';


const ChatsScreens = () => {
  function mergeArrays(gods, lastMessage) {
    const mergedArray = [];
    
    gods.forEach((god, index) => {
      const linkedMessage = lastMessage.find(message => message.link === god.link);
      
      const mergedObject = {
        id: (index + 1).toString(),
        user: god,
        lastMessage: linkedMessage
      };
      
      mergedArray.push(mergedObject);
    });
    
    return mergedArray;
  }

  const { t } = useTranslation();
  const gods = t('gods');
  const foGods = JSON.parse(gods);
  const mergedData = mergeArrays(foGods, lastMsg);
  return (
    <>    
    <FlatList
    data={mergedData}
    renderItem={({item}) => <ChatListItem chat={item}/>}  />

    </>

  )
}

export default ChatsScreens
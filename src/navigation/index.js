import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OneChatScreen from '../screens/OneChatScreen';
import ChatsScreens from '../screens/ChatsScreens';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainTabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="Chats" component={ChatsScreens} />
        
        
        <Stack.Screen name="OneChats" component={OneChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatsScreens from './src/screens/ChatsScreens';
import OneChatScreen from './src/screens/OneChatScreen';
import Navigator from './src/navigation';



export default function App() {
  return (
    <View style={styles.container}>
     
      {/* <ChatsScreens /> */}
      {/* <OneChatScreen /> */}
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical:5,
  },
});

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotImplementedScreen from "../screens/NotImplementedScreen";

import { Ionicons, Entypo } from "@expo/vector-icons";
import ChatsScreens from "../screens/ChatsScreens";
import DonateScreen from "../screens/DonateScreen";
import SettingScreen from "../screens/SettingScreen";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Talk To God"
      screenOptions={{
        tabBarStyle: { backgroundColor: "whitesmoke" },
        headerStyle: { backgroundColor: "whitesmoke" },
      }}
    >
      
      <Tab.Screen
        name="Donate"
        component={DonateScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Calls"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera-outline" size={size} color={color} />
          ),
        }}
      /> */}
      
      <Tab.Screen
        name="Talk To God"
        component={ChatsScreens}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
          ),
          headerRight: () => (
            <Entypo
              onPress={() => navigation.navigate("Contacts")}
              name="new-message"
              size={18}
              color={"royalblue"}
              style={{ marginRight: 15 }}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
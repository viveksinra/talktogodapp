import { StyleSheet } from "react-native";
import { Text, View, Image } from "react-native";


const ChatListItem = () => {
  return (
    <View style={styles.container}>
        <Image source={{uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"}} 
        style={styles.image}/>
        <View style={styles.content}>
            <View style={styles.row}>
                 <Text numberOfLines={1} style={styles.name}>Vivek Singh</Text>
                 <Text style={styles.subTitle} >8:30</Text>
            </View>
            <Text numberOfLines={2} style={styles.subTitle}>Hello Message </Text>
        </View>
        
    </View>
  )
}; 

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginHorizontal:10,
        marginVertical:5,
        height:70,
    },
    image:{
        width:60,
        height:60,
        borderRadius:30,
        marginRight:10,
    },
    content:{
        flex:1,
        borderBottomColor:'lightgray',
        borderBottomWidth:StyleSheet.hairlineWidth
    },
    row:{
        flexDirection:'row'
    },
    name:{
        flex:1,
        fontWeight:'bold',
    },
    subTitle:{
        color: 'gray',
    },
});

export default ChatListItem;
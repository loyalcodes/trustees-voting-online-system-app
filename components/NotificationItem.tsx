import React from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import {
    FontAwesome5,
    AntDesign,
    Feather,
    Entypo,
    MaterialCommunityIcons,
    Ionicons,
  } from "@expo/vector-icons"
import Colors from "../constants/Colors"
import { useNavigation } from "@react-navigation/native"

interface dataType {
    item: {
        id: number,
        title: string,
        content: string,
        type: string
    }
}

export default ( { item } :dataType ) =>{

    const navigation = useNavigation()

    return (
        <>
           <TouchableOpacity onPress={()=>navigation.navigate("NotificationContentScreen", { content: item })} activeOpacity={0.4} style={styles.main}>
                <AntDesign style={{top: 4}} name="bells" size={20}/>
                <View style={styles.innerWrapper}>
                    <Text style={styles.title}> { item.title } </Text>
                    <Text numberOfLines={2} style={styles.content}> { item.content } </Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 10,
        backgroundColor: Colors.light.white,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        height: 80,
        flexDirection: "row",
        marginTop: 10
    },
    innerWrapper : {
        marginLeft: 10,
        padding: 5,
        alignSelf: "center",
        flex: 1,
        elevation: 10
    },
    title : {
        fontSize: 18,
        fontWeight: "600"
    },
    content : {
        fontSize: 14,
        marginTop: 3
    }
})
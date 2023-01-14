import React from "react";
import {
    FontAwesome5,
    AntDesign,
    Feather,
    Entypo,
    MaterialCommunityIcons,
    Ionicons,
  } from "@expo/vector-icons";
import { StyleSheet, View, Text, Platform } from "react-native";
import Colors from "../../constants/Colors";

interface Props {
    title: string
}
const MainHeader = ( {title} : Props ) =>{
    return(
        <>
            <View style={styles.main}>
                <Text style={styles.text}> { title } </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        height: 55,
        backgroundColor:Colors.light.semiSecondary,
        elevation: 4,
        justifyContent:"center",
        marginTop: Platform.OS === "android" ? 30 : 0
    },
    text: {
        color: Colors.light.white,
        fontSize: 18,
        marginLeft:15
    }
})

export default MainHeader;

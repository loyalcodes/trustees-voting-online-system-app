import React from "react";
import {
    FontAwesome5,
    AntDesign,
    Feather,
    Entypo,
    MaterialCommunityIcons,
    Ionicons,
  } from "@expo/vector-icons";
import { StyleSheet, View, Text, Platform, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

interface Props {
    title: string,
    hasArrow: boolean
}
const MainHeader = ( {title, hasArrow} : Props ) =>{

    const navigation = useNavigation()

    return(
        <>
            <View style={[styles.main, {} ]}>
            <TouchableOpacity onPress={navigation.goBack} style={[styles.arrowSection, { display: !hasArrow ? "none" : "flex" } ]}>
                <AntDesign style={[styles.arrow, { } ]} name="arrowleft" size={20}/>
            </TouchableOpacity>
                <Text style={styles.text}> { title } </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        height: 55,
        backgroundColor:Colors.light.semiSecondary,
        marginTop: Platform.OS === "android" ? 0 : 0,
        flexDirection: "row",
    },
    text: {
        color: Colors.light.white,
        fontSize: 18,
        marginLeft:0,
        alignSelf:"center",
        fontWeight: "700"
    },
    arrow: {
        color: Colors.light.white,
        alignSelf: "center",
        marginLeft: 0
    },
    arrowSection: {
        alignSelf: "center",
        height: 50,
        width: 60,
        justifyContent: "center",
    }
})

export default MainHeader;

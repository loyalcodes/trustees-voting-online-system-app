import React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import {
    FontAwesome5,
    AntDesign,
    Feather,
    Entypo,
    MaterialCommunityIcons,
    Ionicons,
  } from "@expo/vector-icons";
import Colors from "../constants/Colors";

interface Props {
    onCategorySelected: any,
    item: {
        id: number,
        name: string,
        active: boolean,
    }
}

export default ( { item, onCategorySelected } : Props) =>{
    const { id, name, active } = item
    return(
        <>
            <TouchableOpacity onPress={()=>onCategorySelected(item)} style={[styles.main, { backgroundColor: active ? Colors.light.primary : Colors.light.lightGray }]}>
                <Text style={{alignSelf:"center", color: active ? Colors.light.white : 'black', fontWeight: active ? "700" : "400"}}> { name } </Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        height:30,
        
        justifyContent: "center",
        borderRadius: 4,
        marginLeft: 10,
        padding: 1,
        paddingLeft:8,
        paddingRight: 8
    }
})
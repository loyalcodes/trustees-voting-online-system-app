import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MainHeader from "../components/header/MainHeader";
import Colors from "../constants/Colors";
import { rawData } from "../data";
import { useNavigation } from "@react-navigation/native";

export default function IntroductionScreen(){

    const [content, setContent] = useState<String>("")
    const navigation = useNavigation()

    useEffect( ()=>{
        const introData = rawData.introduction
        setContent(introData)
    },[])
    
    return(
        <>
            <SafeAreaView style={styles.main}>
                <View>
                    <MainHeader hasArrow={false} title={"Introduction"}/>

                   <View style={styles.content}>
                        <Text style={styles.contentText}>{ content }</Text>
                   </View>
                </View>

                <TouchableOpacity onPress={()=>navigation.navigate("NominateScreen")} activeOpacity={0.8} style={styles.button}>
                        <Text style={styles.buttonTitle}> Continue </Text>
                </TouchableOpacity>

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    content: {
        padding: 20
    },
    contentText: {
        fontSize: 16
    },
    button: {
        position: "absolute",
        bottom: 40,
        backgroundColor: Colors.light.primary,
        width: 300,
        borderRadius: 50,
        padding: 10,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        height: 50
    },
    buttonTitle: {
        color: Colors.light.white,
        fontSize: 18,
        fontWeight: "600"
    }
})

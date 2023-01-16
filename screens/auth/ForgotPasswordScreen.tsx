import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MainHeader from "../../components/header/MainHeader";
import Colors from "../../constants/Colors";
import { rawData } from "../../data";

export default function ForgotPasswordScreen () {

    const [content, setContent] = useState<String>("")

    useEffect( ()=>{
        const introData = rawData.forgotPassword
        setContent(introData)
    },[])
    
    return(
        <>
            <SafeAreaView style={styles.main}>
                <View>
                    <MainHeader hasArrow title={"Forgot Password"}/>

                   <View style={styles.content}>
                        <Text style={styles.contentText}>{ content }</Text>
                   </View>
                </View>

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

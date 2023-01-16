import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import MainHeader from "../components/header/MainHeader";
import Colors from "../constants/Colors";
import { rawData } from "../data";
import { useNavigation } from "@react-navigation/native";



interface eligibilityType {
    title: string,
    body: string
}
interface introductionType {
    title: string,
    body: string
}

export default function IntroductionScreen(){

    const [content, setContent] = useState<introductionType>()
    const [eligible, setEligible] = useState<eligibilityType>()
    const navigation = useNavigation()
   

    useEffect( ()=>{
        const introData = rawData.introduction
        const eligibleData = rawData.eligibility
        setEligible(eligibleData)
        setContent(introData)
    },[])
    

    return(
        <>
            <SafeAreaView style={styles.main}>
                <MainHeader hasArrow={false} title={"Introduction"}/>
                <ScrollView>
                    <View>  
                        <View style={styles.content}>
                            <Text style={styles.introductionTitle}> { content?.title } </Text>
                            <Text style={styles.introductionBody}> { content?.body } </Text>
                            <View style={styles.eligibleWrapper}>
                                <Text style={styles.eligibleTitle}> { eligible?.title } </Text>
                                <Text style={styles.eligibleBody}> { eligible?.body } </Text>
                            </View>
                        </View>
                        <View style={{height:100,}}/>
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={()=>navigation.navigate("UserScreen")} activeOpacity= { 0.8 } style={styles.button}>
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
    introductionTitle:{
        fontWeight:'700',
        marginBottom:8,
    },
    introductionBody: {
        fontSize: 16,
        textAlign:'justify',
    },
    eligibleWrapper:{
        marginTop: 20,
    },
    eligibleTitle:{
        textAlign:'justify',
        fontWeight:'700',
        marginBottom:8,
    },
    eligibleBody:{
        textAlign:'justify',
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

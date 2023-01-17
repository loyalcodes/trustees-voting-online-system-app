import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, ScrollView, StatusBar, Platform } from "react-native";
import MainHeader from "../components/header/MainHeader";
import Colors from "../constants/Colors";
import { rawData } from "../data";
import { useNavigation } from "@react-navigation/native";

import {
    FontAwesome5,
    AntDesign,
    Feather,
    Entypo,
    MaterialCommunityIcons,
    Ionicons,
  } from "@expo/vector-icons";
import { setStatusBarStyle } from "expo-status-bar";

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
    const [selected, setSelected] = useState(false)
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
                <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content": "light-content"}/>
                <View>
                    <MainHeader hasArrow={false} title={"NamRA Trustee Voting"}/>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.upperContentContainer}>
                        <ScrollView>
                            <View style={styles.content}>
                                <Text style={styles.introductionTitle}> { content?.title } </Text>
                                <Text style={styles.introductionBody}> { content?.body } </Text>
                                <View style={styles.eligibleWrapper}>
                                    <Text style={styles.eligibleTitle}> { eligible?.title } </Text>
                                    <Text style={styles.eligibleBody}> { eligible?.body } </Text>
                                </View>
                            </View>
                            <View style={{height:30,}}/>
                        </ScrollView>
                    </View>
                    <View style={styles.lowerContentContainer}>
                        <View style={styles.declarationWrapper}>
                            <TouchableOpacity onPress={()=>setSelected(!selected)} style={styles.declarationWrapper}>
                                <View style={styles.declarationIcon}>
                                    {
                                        selected ? <Ionicons name="radio-button-on" size={18} color={Colors.light.semiSecondary}/> 
                                        : <Ionicons name="radio-button-off-sharp" size={18} color={Colors.light.semiSecondary}/>
                                    }
                                </View>
                                <Text style={styles.declarationText}> I HAVE READ AND I UNDERSTAND</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.contineButtonWrapper}>
                            {
                                selected ? 
                                <TouchableOpacity onPress={()=>navigation.navigate("UserScreen")} activeOpacity= { 0.8 } style={styles.button} disabled= { !selected } >
                                    <Text style={styles.buttonTitle}> Continue </Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={styles.disabledButton} disabled= { !selected } >
                                    <Text style={styles.disabledbuttonTitle}> Continue </Text>
                                </TouchableOpacity>
                            }
                        </View>
                        
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
     
    },
    mainHeaderContainer:{
        paddingTop:10,
    },
    content: {
        paddingHorizontal: 20,
        paddingTop:20,
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
        flex:4,
        marginTop: 20,
    },
    contineButtonWrapper:{
        flex:1,
    },
    eligibleTitle:{
        textAlign:'left',
        fontWeight:'700',
        marginBottom:20,
    },
    eligibleBody:{
        fontSize: 14,
        textAlign:'left',
    },
    declarationWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
        alignContent:'center',
        paddingTop:9,
        paddingBottom:9,
    },
    declarationIcon:{
        alignSelf:"center",
    },
    declarationText:{
        textAlign:'center',
        fontSize:14,
        fontWeight:'500',
        color: Colors.light.semiSecondary,
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
    },
    disabledButton: {
        position: "absolute",
        bottom: 40,
        backgroundColor: Colors.light.lightGray,
        width: 300,
        borderRadius: 50,
        padding: 10,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        height: 50
    },
    disabledbuttonTitle: {
        color: Colors.light.black,
        fontSize: 18,
        fontWeight: "600"
    },
    contentContainer:{
        flex:1,
    },
    upperContentContainer:{
        flex:4,
    },
    lowerContentContainer:{
        flex:1,
    },
})

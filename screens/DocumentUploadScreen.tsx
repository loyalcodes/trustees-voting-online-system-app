import React, { useEffect, useState } from "react";
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Alert, StatusBar, Platform, SafeAreaView } from "react-native";
import {
    FontAwesome5,
    AntDesign,
    Feather,
    Entypo,
    MaterialCommunityIcons,
    Ionicons,
  } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { showAlertPopup } from "../helper/Alerts";
import { useNavigation } from "@react-navigation/native";
import MainHeader from "../components/header/MainHeader";
import { notifications } from "../data";
import ListView from "../components/candidate/ListView";
import { rawData } from "../data";
import * as DocumentPicker from "expo-document-picker";


interface eligibilityType {
    title: string,
    subbody: string
}

export default function DocumentUploadScreen(){

    const [eligible, setEligible] = useState<eligibilityType>()
    const [policyFile, setPolicyFile] = useState("")
    const [financialFile, setFinancialFile] = useState("")

    const onFileUpload = async (type: string) =>{

        const result = await DocumentPicker.getDocumentAsync({});
        

       // console.log(name);

        switch(type){
            case 'policy':
                break;
            case 'financial':
                break;
        }
    }

    useEffect( ()=>{
        const eligibleData = rawData.eligibility
        setEligible(eligibleData)

    },[])

    return(
        <>
            <SafeAreaView style={styles.main}>
            <StatusBar barStyle={ Platform.OS === 'ios'  ? 'dark-content' : 'light-content'}/>
            
                <MainHeader hasArrow title={"Upload Files"}/>

                <View style={styles.eligibleWrapper}>
                    <Text style={styles.eligibleTitle}> { eligible?.title } </Text>
                    <Text style={styles.eligibleBody}> { eligible?.subbody } </Text>
                </View>  

                <View style={styles.uploadWrapper}>


                <View style={{padding: 10}}>
                    <TouchableOpacity onPress={()=>onFileUpload('policy')} activeOpacity={0.4} style={styles.button}>
                        <View style={{flexDirection: "row", alignSelf: "center"}}>
                            <AntDesign color={Colors.light.primary} size={23} name="addfile"/>
                            <Text style={{fontSize: 15, fontWeight: "600", marginLeft: 10}}>Police clearance</Text>
                        </View>
                        <AntDesign color={Colors.light.red} size={18} style={{alignSelf: "center", marginRight: 10}} name="exclamationcircleo"/>
                    </TouchableOpacity>
                    
                    <View style={{height: 10}}/>

                    <TouchableOpacity onPress={()=>onFileUpload('financial')} activeOpacity={0.4} style={styles.button}>
                        <View style={{flexDirection: "row", alignSelf: "center"}}>
                            <AntDesign color={Colors.light.primary} size={20} name="addfile"/>
                            <Text style={{fontSize: 15, fontWeight: "600", marginLeft: 10}}>Financial certificate</Text>
                        </View>
                        <AntDesign color={Colors.light.red} size={18} style={{alignSelf: "center", marginRight: 10}} name="exclamationcircleo"/>
                    </TouchableOpacity >
                    

                    
                </View>


                </View>      

            </SafeAreaView>
        </>
    )

}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: Colors.light.white
    },
    eligibleWrapper:{
        flex:1,
        marginTop: 20,
        marginBottom:30,
        marginHorizontal:20,
        
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
    uploadWrapper:{
        flex:4,
        backgroundColor:Colors.light.lightGray,
        marginTop: 30,
    },
    button:{
        backgroundColor: Colors.light.white,
        padding: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 50
    }
})

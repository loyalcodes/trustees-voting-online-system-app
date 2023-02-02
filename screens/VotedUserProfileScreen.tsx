import React, { useEffect, useState } from "react";
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Alert, StatusBar, Platform, SafeAreaView, KeyboardAvoidingView } from "react-native";
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
import { style } from "@mui/system";
import { BottomSheet } from 'react-native-btr';

import * as ImagePicker from 'expo-image-picker';
import { EmployeeProps } from "../types";


export default function VotedUserProfileScreen( { route } : any){

    const [image, setImage] = useState("");
    const [visible, setVisible] = useState(false);
    const [bioVisible, setBioVisible] = useState(false);
    const [bio, setBio] = useState("")
    const [reason, setReason] = useState("")
    const [userData, setUserData] = useState<EmployeeProps>()

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setVisible(!visible);
      };

      const toggleBioBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setBioVisible(!bioVisible);
      };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
    };

    useEffect(()=>{
        const { item } = route.params;
        setUserData(item)
    },[])

    return(
        <>
            <SafeAreaView style={styles.main}>
            <StatusBar barStyle={ Platform.OS === 'ios'  ? 'dark-content' : 'light-content'}/>
           
                <MainHeader hasArrow title={"Candidate Profile"}/>
                <View style={{backgroundColor: Colors.light.semiSecondary, flex: 1,}}>
                    <View style={styles.bottomContainer}>
                        <View style={{marginBottom:15,}}>
                            <View style={styles.imageWrapper}>
                                <View style={styles.imageInnerWrapper}>
                                    {
                                        !image?

                                        <Text style={styles.avatarText} >{ userData?.INITIALS }</Text> 
                                        :
                                        <Image style={{width: 136,height: 136, borderRadius: 1000}} resizeMode="contain" source={{ uri: image }} />
                                    }
                                    
                                </View>
                            </View>                             
                        </View >
                        <View style={styles.bioContainer}>



                        <View style={{padding: 2}}>
                        <View  style={styles.button}>
                                <View style={{flexDirection: "row", alignSelf: "center", flex: 1}}>
                                    <View style={{flex:1}}>
                                    <Text style={{fontSize: 18, fontWeight: "600", marginLeft: 10, color: "#000"}}>Full Name</Text>
                                    <Text style={{fontSize: 15, marginLeft: 5, marginTop:5, marginBottom:10, color: Colors.light.smoke}}> { userData?.NAME } { userData?.SURNAME } </Text>
                                    </View>
                                </View>
                        </View>

                        <View style={{height: 10}}/>

                        <View  style={styles.button}>
                                <View style={{flexDirection: "row", alignSelf: "center", flex: 1}}>
                                    <View style={{flex:1}}>
                                    <Text style={{fontSize: 18, fontWeight: "600", marginLeft: 10, color: "#000"}}>Department</Text>
                                    <Text style={{fontSize: 15, marginLeft: 5, marginTop:5, marginBottom:10, color: Colors.light.smoke}}> { userData?.BUSINESS_UNIT } </Text>
                                    </View>
                                </View>
                        </View>

                        <View style={{height: 10}}/>

                        <View  style={styles.button}>
                                <View style={{flexDirection: "row", alignSelf: "center", flex: 1}}>
                                    <View style={{flex:1}}>
                                    <Text style={{fontSize: 18, fontWeight: "600", marginLeft: 10, color: "#000"}}>Bio</Text>
                                    <Text style={{fontSize: 15, marginLeft: 5, marginTop:5, marginBottom:10, color: Colors.light.smoke}}> {`${userData?.NAME} is a ${userData?.POSITION} at NamRA with 8 years of experience helping ${userData?.BUSINESS_UNIT}`} </Text>
                                    </View>
                                </View>
                        </View>
                            
                            <View style={{height: 10}}/>

                            <View style={styles.button}>
                                <View style={{flexDirection: "row", alignSelf: "center", flex: 1}}>
                                    <View style={{flex:1}}>
                                    <Text style={{fontSize: 18, fontWeight: "600", marginLeft: 10, color: "#000"}}>Manifesto</Text>
                                    <Text style={{fontSize: 15, marginLeft: 5, marginTop:5, marginBottom: 10, color: Colors.light.smoke}}>  I have a vast knowledge in financial management and I've previously served on 2 Provident Fund Boards. </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                            
                        </View>
                    </View>
                </View>
                <BottomSheet
          visible={bioVisible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBioBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBioBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
        >
            <TouchableOpacity onPress={()=>toggleBioBottomNavigationView()} style={{height: 40, width: 40, backgroundColor: Colors.light.white, borderRadius: 50, alignSelf: "center", marginBottom: 10, justifyContent: "center", alignItems:"center"}}>
                <AntDesign color={Colors.light.primary} size={20} name="close"/>
            </TouchableOpacity>

          <View style={{
                backgroundColor: '#fff',
                width: '100%',
                height: 300,
                borderTopLeftRadius:0,
                borderTopRightRadius:0,
                padding: 15
              }}>


<Text style= {{fontSize:16, fontWeight:"600", color:Colors.light.semiSecondary}}> Write a paragraph about yourself</Text>
                            <TextInput  
                            value={bio}
                                onChangeText={(text)=>setBio(text)}
                                numberOfLines={4} 
                                cursorColor="black"
                                placeholder="Please write here"
                                style={styles.textInput}
                                placeholderTextColor={Colors.light.smoke}
                            />


<TouchableOpacity onPress={()=>toggleBioBottomNavigationView()} style={{backgroundColor: Colors.light.primary, height: 45, borderRadius: 5, position:"absolute", bottom: 50, width: "100%", alignSelf:"center", justifyContent:"center"}}>
    <Text style={{fontSize: 18, color: Colors.light.white, fontWeight: "600", alignSelf: "center"}}>Save Bio</Text>
</TouchableOpacity>
              </View>
         
         </BottomSheet>

         <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'} keyboardVerticalOffset={keyboardVerticalOffset}>

         <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
        >

<TouchableOpacity onPress={()=>toggleBottomNavigationView()} style={{height: 40, width: 40, backgroundColor: Colors.light.white, borderRadius: 50, alignSelf: "center", marginBottom: 10, justifyContent: "center", alignItems:"center"}}>
                <AntDesign color={Colors.light.primary} size={20} name="close"/>
            </TouchableOpacity>


          <View style={{
                backgroundColor: '#fff',
                width: '100%',
                height: 300,
                borderTopLeftRadius:0,
                borderTopRightRadius:0,
                padding: 15
              }}>


<Text style= {{fontSize:16, fontWeight:"600", color:Colors.light.semiSecondary}}> Write a short paragraph why you should be elected as a member Trustee. </Text>
                            <TextInput  
                            multiline
                            value={reason}
                            onChangeText={(text)=>setReason(text)}
                                numberOfLines={4} 
                                cursorColor="black"
                                placeholder="Please write here"
                                style={styles.textInput}
                                placeholderTextColor={Colors.light.smoke}
                            />

<TouchableOpacity onPress={()=>toggleBottomNavigationView()} style={{backgroundColor: Colors.light.primary, height: 45, borderRadius: 5, position:"absolute", bottom: 50, width: "100%", alignSelf:"center", justifyContent:"center"}}>
    <Text style={{fontSize: 18, color: Colors.light.white, fontWeight: "600", alignSelf: "center"}}>Save Manifesto</Text>
</TouchableOpacity>

              </View>
         
         </BottomSheet>
         </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: Colors.light.white
    },
    bottomContainer: {
        backgroundColor: Colors.light.lightGray,
        flex: 1,
        marginTop: 120,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30.,
        position: "relative"

    },
    imageWrapper: {
        width: 145,
        height:145,
        backgroundColor: Colors.light.white,
        position: "absolute",
        alignSelf: "center",
        marginTop: -80,
        borderRadius: 1000,
        justifyContent: "center",
        alignItems: "center"
    },
    imageInnerWrapper: {
        width: 140,
        height: 140,
        backgroundColor: Colors.light.semiSecondary,
        position: "absolute",
        alignSelf: "center",
        marginTop: -40,
        borderRadius: 1000,
        borderColor:Colors.light.primary,
        borderWidth:4,
        justifyContent: "center",
        alignItems: "center"
    },
    avatarText:{
        fontWeight: "500",
        fontSize: 28,
        color: Colors.light.white,
        
    },
    editButton:{ 
        backgroundColor:Colors.light.semiSecondary, 
      //  backgroundColor:'red',
        padding:2, 
        width:50, 
        height:50, 
        alignSelf:"center", 
        alignItems:"center", 
        justifyContent:"center", 
        marginLeft:110,
        marginTop:20, 
        borderRadius:1000,
        borderWidth:3,
        borderColor:Colors.light.lightGray,
        
    },
    bioContainer:{
        padding: 10,
        marginTop: 80
    },
    textInput:{
        borderRadius: 20,
        padding:10,
        fontSize: 18,
        marginTop: 10
    },
    button:{
        backgroundColor: Colors.light.white,
        padding: 5,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
    }
})

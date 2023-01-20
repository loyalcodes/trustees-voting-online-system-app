import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, StatusBar, Platform, Alert } from "react-native";
import Colors from "../constants/Colors";
import {
    FontAwesome5,
    AntDesign,
    Feather,
    Entypo,
    MaterialCommunityIcons,
    Ionicons,
  } from "@expo/vector-icons";

  import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserScreen(){

    const navigation = useNavigation()

    const onSignOutHandler = () => {
        Alert.alert(
          'Sign out',
          `Are you sure you want to signout?` ,
          [
            { text: `Yes`, onPress: () => {
                navigation.navigate("LoginScreen")
            } },
            {
              text: 'No',
              onPress: () => {},
              style: 'cancel',
            },
          ],
          { cancelable: false }
        );
      };

    return(
        <>
            <SafeAreaView style={styles.main}>
            <StatusBar barStyle={ Platform.OS === 'ios'  ? 'dark-content' : 'light-content'}/>
            <View style={{backgroundColor: Colors.light.semiSecondary, flex: 1}}>
                <View>
                <Image style={{width: 150,height: 80, borderRadius: 50, alignSelf:"center", marginTop: 20}} resizeMode="contain" source={require('../assets/images/logo_white.png')}/>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.imageWrapper}>
                        <Image style={{width: 80,height: 80, borderRadius: 50}} resizeMode="contain" source={require('../assets/images/user.jpg')}/>
                    </View>

                    <View style={styles.infoWrapper}>
                        <Text style={styles.infoName}>Mateus N. Johannes</Text>
                        <Text style={styles.infoPosition}>Application Developer</Text>
                        <Text style={styles.infoDepartment}>ICT</Text>
                    </View>

                    <View style={{height:0.2, backgroundColor: Colors.light.smoke, marginTop: 20, marginLeft: 16, marginRight: 16}}/>

                    <View style={{flexDirection: "row", justifyContent:"space-around", marginTop: 20}}>
                            <TouchableOpacity onPress={()=>navigation.navigate("NotificationScreen")}>
                                <View style={{alignSelf: "center"}}>
                                    <View style={{position: "relative"}}>
                                        <View style={{backgroundColor: Colors.light.red, height: 17, width: 17, borderRadius: 50, padding:1, justifyContent:"center", alignItems:"center", position: "absolute", zIndex: 1, marginRight: -10, marginTop: -5, marginLeft: 14}}>
                                            <Text style={styles.statsText}>1</Text>
                                        </View>
                                        <Ionicons name="ios-notifications" size={25}/>
                                    </View>
                                </View>
                                
                                <Text style={styles.text}>Notifications</Text>
                            </TouchableOpacity>
                            <View style={{backgroundColor: Colors.light.smoke, width:0.3, height: 20, alignSelf: "center"}}/>
                            <TouchableOpacity onPress={()=>navigation.navigate("UserNomineesScreen", { action : 'nominate' })}>
                                <Text style={styles.statTitle}>1</Text>
                                <Text style={styles.text}>My Nominees</Text>
                            </TouchableOpacity>
                            <View style={{backgroundColor: Colors.light.smoke, width:0.3, height: 20, alignSelf: "center"}}/>
                            <TouchableOpacity onPress={()=>navigation.navigate("UserNomineesScreen", { action : 'vote' })}>
                                <Text style={styles.statTitle}>1</Text>
                                <Text style={styles.text}>My Votes</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor: Colors.light.lightGray, marginTop: 30, flex: 1}}>

                        <View style={{padding: 10}}>
                            <TouchableOpacity onPress={()=>navigation.navigate("NominateScreen" , { action: "nominate" })} activeOpacity={0.4} style={styles.button}>
                                <View style={{flexDirection: "row", alignSelf: "center"}}>
                                    <Feather color={Colors.light.primary} size={23} name="key"/>
                                    <Text style={{fontSize: 15, fontWeight: "600", marginLeft: 10}}>Nominate a candidate</Text>
                                </View>
                                <AntDesign size={18} style={{alignSelf: "center"}} name="right"/>
                            </TouchableOpacity >
                            
                            <View style={{ display: 'none' }}>

                                <View style={{height: 10}}/>

                                <TouchableOpacity  onPress={()=>navigation.navigate("NominateScreen" , { action: "endorse" })} activeOpacity={0.4} style={styles.button}>
                                    <View style={{flexDirection: "row", alignSelf: "center"}}>
                                        <Feather color={Colors.light.primary} size={20} name="thumbs-up"/>
                                        <Text style={{fontSize: 15, fontWeight: "600", marginLeft: 10}}>Endorse candidate</Text>
                                    </View>
                                    <AntDesign size={18} style={{alignSelf: "center"}} name="right"/>
                                </TouchableOpacity >

                            </View>
                            
                            <View style={{height: 10}}/>

                            <TouchableOpacity onPress={()=>navigation.navigate("NominateScreen" , { action: "vote" })} activeOpacity={0.4} style={styles.button}>
                                <View style={{flexDirection: "row", alignSelf: "center"}}>
                                    <MaterialCommunityIcons color={Colors.light.primary} size={23} name="vote-outline"/>
                                    <Text style={{fontSize: 15, fontWeight: "600", marginLeft: 10}}>Vote a candidate</Text>
                                </View>
                                <AntDesign size={18} style={{alignSelf: "center"}} name="right"/>
                            </TouchableOpacity>
                        </View>


                        <View style={{alignSelf:"center", marginTop: 20, position: "absolute", bottom: 20}}>
                            <TouchableOpacity onPress={()=>onSignOutHandler()} style={{backgroundColor: Colors.light.red, padding: 10, width: 150, borderRadius: 50, height: 45, alignItems: "center", justifyContent: "center"}}>
                                <Text style={{alignSelf: "center", color: Colors.light.white, fontWeight:"700", fontSize: 15}}>Sign Out</Text>
                            </TouchableOpacity>
                        <Text style={{fontSize:8, alignSelf:"center", marginTop: 10}}>Copyright &copy;2023. NamRA</Text>
                    </View>

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
    bottomContainer: {
        backgroundColor: Colors.light.white,
        flex: 1,
        marginTop: 70,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30.,
        position: "relative"

    },
    imageWrapper: {
        width: 100,
        height:100,
        backgroundColor: Colors.light.white,
        position: "absolute",
        alignSelf: "center",
        marginTop: -40,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    infoWrapper: {
        marginTop: 60,
        alignSelf:"center",
       
    },
    infoName: {
        fontWeight: "700",
        fontSize: 18,
        textAlign: "center",
        color: Colors.light.semiSecondary
    },
    infoPosition: {
        fontWeight: "500",
        fontSize: 14,
        textAlign: "center",
        color: Colors.light.smoke
    },
    infoDepartment: {
        fontWeight: "500",
        fontSize: 12,
        textAlign: "center",
        color: Colors.light.smoke
    },
    statTitle: {
        fontWeight: "700",
        color: Colors.light.semiSecondary,
        fontSize: 20,
        alignSelf:"center"
    },
    text: {
        color: Colors.light.smoke,
        fontSize: 12
    },
    button:{
        backgroundColor: Colors.light.white,
        padding: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 50
    },
    statsText: {
        fontSize: 13,
        color: Colors.light.white,
        alignSelf: "center",
        fontWeight: "700",
        marginTop: Platform.OS === 'android' ? -2 : 0
    }

})
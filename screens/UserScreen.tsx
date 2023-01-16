import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
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

export default function UserScreen(){

    const navigation = useNavigation()

    return(
        <>
            <SafeAreaView style={styles.main}>
                <View>
                <Image style={{width: 80,height: 80, borderRadius: 50, alignSelf:"center", marginTop: 20}} resizeMode="contain" source={require('../assets/images/logo_white.png')}/>
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

                    <View style={{alignSelf:"center", marginTop: 20}}>
                        <TouchableOpacity style={{backgroundColor: Colors.light.red, padding: 10, width: 100, borderRadius: 50}}>
                            <Text style={{alignSelf: "center", color: Colors.light.white, fontWeight:"700"}}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: "row", justifyContent:"space-around", marginTop: 20}}>
                            <View>
                                <Text style={styles.statTitle}>980</Text>
                                <Text style={styles.text}>Candidates</Text>
                            </View>
                            <View style={{backgroundColor: Colors.light.smoke, width:0.3, height: 20, alignSelf: "center"}}/>
                            <View>
                                <Text style={styles.statTitle}>0</Text>
                                <Text style={styles.text}>My Nominees</Text>
                            </View>
                            <View style={{backgroundColor: Colors.light.smoke, width:0.3, height: 20, alignSelf: "center"}}/>
                            <View>
                                <Text style={styles.statTitle}>0</Text>
                                <Text style={styles.text}>Votes</Text>
                            </View>
                    </View>
                    <View style={{backgroundColor: Colors.light.lightGray, marginTop: 30, flex: 1}}>

                        <View style={{padding: 10}}>
                            <TouchableOpacity onPress={()=>navigation.navigate("NominateScreen" , { action: "nominate" })} activeOpacity={0.4} style={styles.button}>
                                <View style={{flexDirection: "row", alignSelf: "center"}}>
                                    <AntDesign color={Colors.light.primary} size={20} name="key"/>
                                    <Text style={{fontSize: 15, fontWeight: "600", marginLeft: 10}}>Nominate a candidate</Text>
                                </View>
                                <AntDesign size={18} style={{alignSelf: "center"}} name="right"/>
                            </TouchableOpacity >
                            
                            <View style={{height: 10}}/>

                            <TouchableOpacity onPress={()=>navigation.navigate("NominateScreen" , { action: "vote" })} activeOpacity={0.4} style={styles.button}>
                                <View style={{flexDirection: "row", alignSelf: "center"}}>
                                    <MaterialCommunityIcons color={Colors.light.primary} size={20} name="vote-outline"/>
                                    <Text style={{fontSize: 15, fontWeight: "600", marginLeft: 10}}>Vote a candidate</Text>
                                </View>
                                <AntDesign size={18} style={{alignSelf: "center"}} name="right"/>
                            </TouchableOpacity>
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
        backgroundColor: Colors.light.semiSecondary
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
        color: Colors.light.smoke
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
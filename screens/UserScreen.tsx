import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Image, Text } from "react-native";
import Colors from "../constants/Colors";

export default function UserScreen(){
    return(
        <>
            <SafeAreaView style={styles.main}>
                <View>
                <Image style={{width: 80,height: 80, borderRadius: 50, alignSelf:"center"}} resizeMode="contain" source={require('../assets/images/logo_white.png')}/>
                    <Text style={{color: "white"}}>sdds</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.imageWrapper}>
                        <Image style={{width: 80,height: 80, borderRadius: 50}} resizeMode="contain" source={require('../assets/images/user.jpg')}/>
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
        marginTop: 100,
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
        marginTop: -30,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    }

})
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Image, Text } from "react-native";
import Colors from "../constants/Colors";

export default function UserScreen(){
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
        fontSize: 20,
        textAlign: "center",
        color: Colors.light.semiSecondary
    },
    infoPosition: {
        fontWeight: "500",
        fontSize: 15,
        textAlign: "center",
        color: Colors.light.lightGray
    },
    infoDepartment: {
        fontWeight: "500",
        fontSize: 12,
        textAlign: "center"
    }

})
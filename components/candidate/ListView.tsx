import React, { useEffect, useState } from "react";
import {
    FontAwesome5,
    AntDesign,
    Feather,
    Entypo,
    MaterialCommunityIcons,
    Ionicons,
  } from "@expo/vector-icons";
import { StyleSheet, View, Text, Platform, TouchableOpacity, Image } from "react-native";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { EmployeeProps } from "../../types"

interface Props {
    onVoteNominateHandler: any,
    action: string,
    item: EmployeeProps
}
export default ( {item, onVoteNominateHandler, action} : Props ) =>{

    const navigation = useNavigation()
    const [actionType, setActionType] = useState<string>("")

    const render = () =>{
        switch(action){
            case 'Nominate':
                setActionType("Nomination")
                break;
            case 'Vote':
                setActionType("Vote")
                break;
        }
    }

    useEffect(()=>{
        render()
    },[])

    return(
        <>
           <View style={styles.main}>
                <View style={styles.firstInner}>
                    <View style={[styles.imageWrapper, { display: action === "nominate" ? 'none' : 'flex' }]}>
                    <View style={{backgroundColor: Colors.light.semiSecondary, width: 60, height: 60, borderRadius: 50, alignSelf: "center", justifyContent: "center"}}>
                            <Text style={{color: Colors.light.white, alignSelf:"center", fontWeight: "600"}}> { item.INITIAL } </Text>
                        </View>
                    </View>
                    <View style={styles.details}>
                        <Text numberOfLines={2} style={styles.detailName}> { item.NAME } { item.SURNAME } </Text>
                        <Text style={[styles.detailDepartment, { fontSize: 15}]}> { item.POS_DESC } </Text>
                        <Text style={[styles.detailDepartment, { color: Colors.light.primary }]}> { item.BUSINESS_UNIT_DESC } </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>onVoteNominateHandler(item)} style={styles.button} activeOpacity={0.4}>
                    <Text style={styles.buttonText}> { action } </Text>
                    <AntDesign style={styles.buttonIcon} color={Colors.light.white} size={14} name="check"/>
                </TouchableOpacity>
           </View>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.light.white
    },
    image: {
        backgroundColor: Colors.light.lightGray,
        width: 55,
        height: 55,
        borderRadius: 50,
       
    },
    firstInner: {
        flexDirection: "row",
        flex: 1
    },
    details: {
        alignSelf: "center",
        marginLeft: 10,
        flex: 1
    },
    detailName: {
        fontSize: 16,
        fontWeight: "700",
        textAlign:"left",
        marginRight: 10,
    }, 
    detailDepartment: {
        fontSize: 12
    },
    imageWrapper: {
        borderColor: Colors.light.primary,
        borderWidth: 3,
        borderRadius: 50,
        padding: 5,
        width: 70,
        height: 70,
        justifyContent: "center"
    },
    button: {
        backgroundColor: Colors.light.semiSecondary,
        justifyContent: "space-around",
        flexDirection: "row",
        height:30,
        padding:5,
        alignSelf: "center",
        width:90,
        borderRadius:2
    },
    buttonText: {
        color: Colors.light.white,
        alignSelf: "center",
        textTransform:"capitalize"
    },
    buttonIcon: {
        alignSelf: "center"
    }
})



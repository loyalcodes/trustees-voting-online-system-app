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
import DepartmentItem from "../components/DepartmentItem";
import Spinner from 'react-native-loading-spinner-overlay';
import UserNomineeVoteItem from "../components/candidate/UserNomineeVoteItem";
import NotificationItem from "../components/NotificationItem";

interface dataType {
    id: number,
    title: string,
    content: string,
    type: string
}
interface flatDataType {
    item : {
        id: number,
        title: string,
        content: string,
        type: string
    }
}
export default function NotificationScreen(){

    const navigation = useNavigation()

    const [data, setData] = useState<dataType>()
    const [shouldLoad, setShouldLoad] = useState(false)

    const loadNotifications = () =>{        
        const data = notifications
        setData(data)
    }

 

  

    useEffect(()=>{
        loadNotifications()
            
    }, [])

    return(
        <>
            <SafeAreaView style={styles.main}>
            <StatusBar barStyle={ Platform.OS === 'ios'  ? 'dark-content' : 'light-content'}/>
            <Spinner
            visible={shouldLoad}
            textContent={'Please wait...'}
            textStyle={{color: '#FFF',marginTop:-60}}
            />
                <MainHeader hasArrow title={"My Notifications"}/>

                
              
                <FlatList
                
                data={data}
                renderItem={( { item } : flatDataType) => <NotificationItem item={item}/>}
                />

                <View style={{}}/>

            
         

            </SafeAreaView>
        </>
    )

}

const styles = StyleSheet.create({
    main:{
        flex: 1,
    },
    searchWrapper: {
        padding: 5,
        marginTop: 5
    },
    searchInnerWrapper: {
        flexDirection: "row",
        padding: 6,
        backgroundColor: Colors.light.lightGray,
        borderRadius: 50,
        marginLeft: 10,
        marginRight: 10
    },
    input: {
        flex: 1,
        marginRight: 10,
        alignSelf:"center",
        marginLeft: 10,
        height: 30,
        fontSize: 16
    },
    icon: {
        alignSelf: "center",
        marginLeft: 5,
        color: Colors.light.primary
    },
    nominees: {
        padding: 10,
        flexDirection: "row",
        marginTop:-10
    },
    departmentListWrapper: {
        position: "absolute",
        bottom: Platform.OS === "ios" ? 20 : 0,
        backgroundColor: Colors.light.white,
        
    },
    departmentListWrapperText:{
        color: "black",
        fontWeight: "600",
        padding: 5,
        marginLeft: 5
    }
})

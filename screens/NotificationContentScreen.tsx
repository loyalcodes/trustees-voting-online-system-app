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
export default function NotificationContentScreen( { route } : any){

    const navigation = useNavigation()

    const [content, setContent] = useState<dataType>()
    const [shouldLoad, setShouldLoad] = useState(false)

    const onAcceptHandler = () => {
        Alert.alert(
         "Action",
          `Are you sure you want to accept?` ,
          [
            { text: `Yes`, onPress: () => {
                    Alert.alert('Documents', 'Upload your documents')
                    navigation.navigate("DocumentUploadScreen")
            } },
            {
              text: 'No',
              onPress: () => console.log('No Pressed'),
              style: 'cancel',
            },
          ],
          { cancelable: false }
        );
      };

      const onDeclineHandler = () => {
        Alert.alert(
          "Action",
          `Are you sure you want to decline?` ,
          [
            { text: `Yes`, onPress: () => {
                setShouldLoad(true)
                setTimeout(()=>{
                    Alert.alert('Thank You!', 'Your action has been recorded.')
                    navigation.navigate("NotificationScreen")
                }, 5000)
            } },
            {
              text: 'No',
              onPress: () => console.log('No Pressed'),
              style: 'cancel',
            },
          ],
          { cancelable: false }
        );
      };



    useEffect(()=>{
        const { content } = route.params
        setContent(content)
            
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
                <MainHeader hasArrow title={content?.title}/>

                
                <View style={{marginTop: 10, padding: 10}}>
                    <Text style={{fontSize: 16}}> { content?.content } </Text>
                </View>

                <View style={{bottom: 50, position: "absolute", justifyContent: "space-around", flexDirection: "row", padding: 20}}>
                    <TouchableOpacity onPress={()=>onAcceptHandler()} style={{backgroundColor:Colors.light.green, flex: 1, height:40, borderRadius: 4,justifyContent:"center", marginRight:10 }}>
                        <Text style={{ alignSelf:"center", color: Colors.light.white, fontSize:16, fontWeight:"600"}}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>onDeclineHandler()} style={{backgroundColor: Colors.light.red, flex: 1, height: 40, borderRadius: 4, justifyContent:"center", marginLeft:10}}>
                        <Text style={{alignSelf: "center", color: Colors.light.white, fontSize: 16, fontWeight: "600"}}>Decline</Text>
                    </TouchableOpacity>
                </View>
         

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

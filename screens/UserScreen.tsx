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
import { readLocalStorageObject, removeLocalStorageObj } from "../helper/LocalStorage";
import {  userData as UserData } from "../services/ApiComms";
import { AuthContext } from "../components/Context";


interface UserProps {
    employee_id: string,
    title: string,
    initials: string,
    fullname: string,
    firstname: string,
    surname: string,
    email: string,
    jobDescription: string,
    department: string,
    station: string,
    position: string
}

interface UserStats {
    nominees: number,
    votes: number
}

export default function UserScreen(){

    const navigation = useNavigation()
    const [userData, setUserData] = useState<UserProps>()
    const [userStats, setUserStats] = useState<UserStats>({ nominees: 0, votes: 0 })
    const { signOut } = React.useContext(AuthContext);

    const onSignOutHandler = () => {
        Alert.alert(
          'Sign out',
          `Are you sure you want to signout?` ,
          [
            { text: `Yes`, onPress: async () => {
                
                setTimeout(()=>{
                    signOut()
                },1000)
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

    const loadUserLocalData = async () => {
        const result = await readLocalStorageObject('userData')
        if(result != null){
            const { userProfile } = result
        const a = userProfile[0]
        const obj = {
            employee_id: a.EMPLOYEE_ID,
            title: a.TITLE,
            initials: a.INITIAL,
            firstname: a.NAME,
            fullname: a.NAME + ' ' + a.SURNAME,
            surname: a.SURNAME,
            email: a.EMAIL,
            jobDescription: a.JOB_GRADE_DESC,
            department: a.BUSINESS_UNIT_DESC,
            station: a.STATION_DESC,
            position: a.POS_DESC
        }
        setUserData(obj)
        loadUserData(a.EMPLOYEE_ID)
        }

    }
    
    const loadUserData = async (id: any) => {
        const response = await UserData(id)
        const { nominees, votes } = response
        const nomineeObj = nominees[0]
        const votesObj = votes[0]
        if(response != undefined || response != null) {
            setUserStats(
                {
                    nominees: nomineeObj.length || 0,
                    votes: votesObj.length || 0  
                }
            )
        }else{
            setUserStats(
                {
                    nominees: 0,
                    votes: 0  
                }
            )
        }
    }

    useEffect(()=>{
        loadUserLocalData()
    },[])

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
                        <View style={styles.imageInnerWrapper}>
                            <Text style={styles.avatarText} >{ userData?.initials }</Text>
                        </View>
                    </View>

                    <View style={styles.infoWrapper}>
                        <Text style={styles.infoName}> { userData?.fullname } </Text>
                        <Text style={styles.infoPosition}> { userData?.position } </Text>
                        <Text style={styles.infoDepartment}> { userData?.department } </Text>
                    </View>

                    <View style={{height:0.2, backgroundColor: Colors.light.smoke, marginTop: 20, marginLeft: 16, marginRight: 16}}/>

                    <View style={{flexDirection: "row", justifyContent:"space-around", marginTop: 20}}>
                    <TouchableOpacity onPress={()=>navigation.navigate("UserProfileScreen")}>
                                <View style={{alignSelf:"center", marginBottom:4, marginTop:4}}>
                                    <FontAwesome5 name="edit" size={18} color={Colors.light.semiSecondary} />
                                </View>
                                <Text style={styles.text}>Edit Profile</Text>
                            </TouchableOpacity>
                            <View style={{backgroundColor: Colors.light.smoke, width:0.3, height: 20, alignSelf: "center"}}/>
                            <TouchableOpacity onPress={()=>navigation.navigate("UserNomineesScreen", { action : 'nominate' })}>
                                <Text style={styles.statTitle}> { userStats.nominees } </Text>
                                <Text style={styles.text}>My Nominees</Text>
                            </TouchableOpacity>
                            <View style={{backgroundColor: Colors.light.smoke, width:0.3, height: 20, alignSelf: "center"}}/>
                            <TouchableOpacity onPress={()=>navigation.navigate("UserNomineesScreen", { action : 'vote' })}>
                                <Text style={styles.statTitle}> { userStats.votes } </Text>
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
    },
    imageInnerWrapper: {
        width: 87,
        height: 87,
        backgroundColor: Colors.light.semiSecondary,
        position: "absolute",
        alignSelf: "center",
        marginTop: -40,
        borderRadius: 50,
        borderColor:Colors.light.primary,
        borderWidth:2,
        justifyContent: "center",
        alignItems: "center"
    },
    avatarText:{
        fontWeight: "500",
        fontSize: 28,
        color: Colors.light.white,
        
    }

})
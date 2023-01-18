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
import { candidateList, departmentsList } from "../data";
import ListView from "../components/candidate/ListView";
import DepartmentItem from "../components/DepartmentItem";
import Spinner from 'react-native-loading-spinner-overlay';
import UserNomineeVoteItem from "../components/candidate/UserNomineeVoteItem";

interface CandidateType {
    name: string,
    department: string
}
interface CandidateListType {
    item: {
        name: string,
        department: string
    }
}
interface DepartmentProps {
    id: number,
    name: string,
    active: boolean
}
interface DepartmentType {
    item: {
        id: number,
        name: string,
        active: boolean
    }
}

export default function UserNomineesScreen( {route}: any ){

    const navigation = useNavigation()

    const [candidates, setCandidates] = useState([])
    const [departments, setDepartments] = useState([])
    const [action, setAction] = useState("")
    const [title, setTitle] = useState("")
    const [shouldLoad, setShouldLoad] = useState(false)
    const [currentDepartment, setCurrentDepartment] = useState("All")

    const loadCandidates = () =>{        
        const data = candidateList
        const departments = departmentsList
        setCandidates(data)
        setDepartments(departments)
    }

    const onVoteNominateHandler = (candidate: CandidateType) => {
        Alert.alert(
          action === "nominate" ? "Nomination" : "Vote",
          `Are you sure you want to remove ${candidate.name} from your list?` ,
          [
            { text: `Yes`, onPress: () => {
                setShouldLoad(true)
                setTimeout(()=>{
                    Alert.alert('Thank You!', 'Your cast has been recorded.')
                    navigation.navigate("UserScreen")
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

    const onCategorySelected = ( { name, id, active } : DepartmentProps ) =>{

        const allDeparts = departments
        //Update current selected department
        for(let i = 0; i < departments.length; i++ ){
            let departObject: DepartmentProps = departments[i]
            if(departObject != undefined){
                if(departObject.name === name){
                    departObject.active = true
                }else{
                    departObject.active = false
                }
            }
        }
        console.log(allDeparts)
            setDepartments(departments)
            loadCandidates()
            setCurrentDepartment(name)
    }

    const render = (action: string) =>{
        switch(action){
            case 'nominate':
                setTitle("My Nominees")
                break;
            case 'vote':
                setTitle("My Votes")
                break;
        }
    }

    useEffect(()=>{
        const { action } = route.params
        setAction(action)
        loadCandidates()
        render(action)
            
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
                <MainHeader hasArrow title={title}/>
              

                <FlatList
                data={candidates}
                renderItem={ ({item} : CandidateListType) =><UserNomineeVoteItem action={action} onVoteNominateHandler={onVoteNominateHandler}  item={item}/>}
                />

                <View style={{}}/>

            
         

            </SafeAreaView>
        </>
    )

}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: Colors.light.white,
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

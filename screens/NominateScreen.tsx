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
import { getCandidates, userNominate } from "../services/ApiComms";
import { readLocalStorageObject, writeLocalStorageObject } from "../helper/LocalStorage";

interface CandidateType {
    EMPLOYEE_ID: string,
    EMPOYEE_CODE: string,
    TITLE: string,
    INITIAL: string,
    NAME: string,
    SURNAME: string,
    GENDER: number,
    GENDER_DESC: string,
    CONTACT_NUMBER: string,
    EMAIL: string,
    POSITION: number,
    POS_DESC: string,
    JOB_GRADE: number,
    JOB_GRADE_DESC: string,
    BUSINESS_UNIT: number,
    BUSINESS_UNIT_DESC: string,
    STAFF_CATEGORY: number,
    CONTRACT_TYPE_DESC: string,
    DUTY_STATION: number,
    STATION_DESC: string
}
interface CandidateListType {
    item: {
        EMPLOYEE_ID: string,
        EMPOYEE_CODE: string,
        TITLE: string,
        INITIAL: string,
        NAME: string,
        SURNAME: string,
        GENDER: number,
        GENDER_DESC: string,
        CONTACT_NUMBER: string,
        EMAIL: string,
        POSITION: number,
        POS_DESC: string,
        JOB_GRADE: number,
        JOB_GRADE_DESC: string,
        BUSINESS_UNIT: number,
        BUSINESS_UNIT_DESC: string,
        STAFF_CATEGORY: number,
        CONTRACT_TYPE_DESC: string,
        DUTY_STATION: number,
        STATION_DESC: string
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

export default function NominateScreen( {route}: any ){

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
          `Are you sure you want to ${action} ${candidate.name}?` ,
          [
            { text: `Yes`, onPress: async() => {
                setShouldLoad(true)
                const response = await userNominate()
                setShouldLoad(false)
               // alert(JSON.stringify(response))
                    Alert.alert('Thank You!', 'Your cast has been recorded.')
                    navigation.navigate("UserScreen")
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
                setTitle("Nomination")
                break;
            case 'vote':
                setTitle("Vote")
                break;
            case 'endorse':
                setTitle("Endorsement")
                break;
        }
    }

    const loadContent = async (action: any) => {

        /**
         * CHECK IF WE HAVE DATA ON LOCAL STORAGE FIRST
         */
        const offlineData = await readLocalStorageObject("candidatesListData")
        if(offlineData != undefined || offlineData != null){
            /** LOAD OFFLINE DATA */
            setCandidates(offlineData)

            /** UPDATE WITH LIVE DATA { IN THE BACKGROUND } */
            const response = await getCandidates()
            setCandidates(response)
            await writeLocalStorageObject("candidatesListData", response) // SAVE DATA TO LOCAL STORAGE
        }else{
            setShouldLoad(true)
            const response = await getCandidates()
            setCandidates(response)
            await writeLocalStorageObject("candidatesListData", response)
            setShouldLoad(false)
        }
        
        
        
    }

    useEffect(()=>{
        const { action } = route.params
        setAction(action)
        loadCandidates()
        render(action)
        loadContent(action) 
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
                <View style={styles.searchWrapper}>
                    <View style={styles.searchInnerWrapper}>
                        <AntDesign style={styles.icon} name="search1" size={20} />
                        <TextInput placeholderTextColor='#000' style={styles.input} placeholder={`Search candidate to ${action}`} />
                    </View>
                </View>

                <View style={styles.nominees}>
                    <View style={{flexDirection: "row"}}>
                        <Text style={{fontSize:16, fontWeight:"700", alignSelf:"center"}}>Candidates</Text>
                        <AntDesign size={12} style={{marginLeft: 5, alignSelf: "center", top: 2.5}} name="right"/>
                    </View>
                    <Text style={{fontSize:10, fontWeight:"600", marginLeft: 5, alignSelf: "center", top: 2}}> { currentDepartment } </Text>
                </View>
                <FlatList
                data={candidates}
                renderItem={ ({item} : CandidateListType) =><ListView action={action} onVoteNominateHandler={onVoteNominateHandler}  item={item}/>}
                />

                <View style={{}}/>

            
            <View style={[styles.departmentListWrapper, { display: action === 'nominate' ? 'flex' : 'none' }]}>
                <View style={{marginBottom:10}}>
                <Text style={styles.departmentListWrapperText}>View by department</Text>
                <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={departments}
                renderItem={ ({item}: DepartmentType) => <DepartmentItem onCategorySelected={onCategorySelected} item={item}/>}/>
                </View>
            </View>

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

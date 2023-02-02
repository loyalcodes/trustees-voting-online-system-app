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
import { getCandidates, getCandidatesByDepartment, getDepartments, getEligibleMembers, userNominate, userVote } from "../services/ApiComms";
import { readLocalStorageObject, writeLocalStorageObject } from "../helper/LocalStorage";
import { EmployeeProps } from "../types";
import { ListItemAnimation, MultiListItemAnimation, TwoLineAnimation } from "../helper/LoaderAnimator";
import { DepartmentType } from "../types";

interface CandidateListType {
    item: EmployeeProps
}
interface DepartmentProps {
    id: number,
    name: string,
    active: boolean
}
interface DepartmentTypeProps {
    item: DepartmentType
}

export default function NominateScreen( {route}: any ){

    const navigation = useNavigation()

    const [candidates, setCandidates] = useState([])
    const [tempCandidates, setTempCandidates] = useState([])
    const [departments, setDepartments] = useState([])
    const [action, setAction] = useState("")
    const [title, setTitle] = useState("")
    const [searchText, setSearchText] = useState("")
    const [shouldLoad, setShouldLoad] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [shouldLoadDepartment, setShouldLoadDepartment] = useState(false)
    const [currentDepartment, setCurrentDepartment] = useState("All")

    const loadCandidates = () =>{        
        const data = candidateList
        const departments = departmentsList
       // setCandidates(data)
        //setDepartments(departments)
    }

    

    const onVoteNominateHandler = (candidate: EmployeeProps) => {
        Alert.alert(
          action === "nominate" ? "Nomination" : "Vote",
          `Are you sure you want to ${action} ${candidate.NAME}?` ,
          [
            { text: `Yes`, onPress: async() => {
                setShouldLoad(true)
                switch(action){
                    case 'nominate':
                        const response = await userNominate(candidate.EMPLOYEE_ID)
                        if(response.rowsAffected){
                        Alert.alert('Thank You!', 'Your cast has been recorded.')
                        navigation.navigate("UserScreen")
                        }else{
                            Alert.alert('Failed', 'There was a problem while nominating')
                        }
                            console.log(response)
                        break;
                    case 'vote':
                       // alert(JSON.stringify(candidate))
                        const voteResponse = await userVote(candidate.EMP_ID)
                        //const { rowsAffected } = response
                        if(voteResponse.rowsAffected){
                            Alert.alert('Thank You!', 'Your cast has been recorded.')
                            navigation.navigate("UserScreen")
                        }else{
                            Alert.alert('Failed', 'There was a problem while voting')
                        }
                        console.log(voteResponse)
                        break;
                }
                
                setShouldLoad(false)
               // alert(JSON.stringify(response))
                   // Alert.alert('Thank You!', 'Your cast has been recorded.')
                   // navigation.navigate("UserScreen")
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

    const onCategorySelected = async ( { NAME, ID, active } : DepartmentType ) =>{
        const allDeparts = departments
        //Update current selected department
        for(let i = 0; i < departments.length; i++ ){
            let departObject: DepartmentType = departments[i]
            if(departObject != undefined){
                if(departObject.NAME === NAME){
                    departObject.active = true
                }else{
                    departObject.active = false
                }
            }
        }
            setDepartments(departments)
            setCurrentDepartment(NAME)
            if(ID == 0) {
                setShouldLoad(true)
                const response = await getCandidates()
                setCandidates(response)
                setShouldLoad(false)
                setTempCandidates(response)

            }else{
                setShouldLoad(true)
                const byDepartmentResponse = await getCandidatesByDepartment(ID)
                setShouldLoad(false)
                setTempCandidates(byDepartmentResponse)
            }
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
        switch(action){
            case 'nominate':
                const offlineData = await readLocalStorageObject("candidatesListData")
                if(offlineData != undefined || offlineData != null){
                    /** LOAD OFFLINE DATA */
                    setCandidates(offlineData)
                    setTempCandidates(offlineData)
        
                    /** UPDATE WITH LIVE DATA { IN THE BACKGROUND } */
                    const response = await getCandidates()
                    setCandidates(response)
                    setTempCandidates(response)
                    await writeLocalStorageObject("candidatesListData", response) // SAVE DATA TO LOCAL STORAGE
                }else{
                    setShouldLoad(true)
                    const response = await getCandidates()
                    setCandidates(response)
                    setTempCandidates(response)
                    await writeLocalStorageObject("candidatesListData", response)
                    setShouldLoad(false)
                }
                break;
            case 'vote':

            const offlineEligibleData = await readLocalStorageObject("eligibleListData")
            if(offlineEligibleData != undefined || offlineEligibleData != null){
                /** LOAD OFFLINE DATA */
                setCandidates(offlineEligibleData)
                setTempCandidates(offlineEligibleData)
                /** UPDATE WITH LIVE DATA { IN THE BACKGROUND } */
                const response = await getEligibleMembers()
                setCandidates(response)
                setTempCandidates(response)
                await writeLocalStorageObject("eligibleListData", response) // SAVE DATA TO LOCAL STORAGE
            }else{
                setShouldLoad(true)
                const response = await getEligibleMembers()
                setCandidates(response)
                await writeLocalStorageObject("eligibleListData", response)
                setShouldLoad(false)
            }

                break;
        }
        
    }

    const onSearch = (searchItem: any) => {
        setIsSearch(true)
        if(searchItem === "") {
         setTempCandidates(candidates)
         setCandidates(candidates)
         setSearchText(searchItem)
         //alert(candidates)
         console.log("Hereeeeeeeeeeeeeee") 
        }else{
            const result = tempCandidates.filter((item) => {
                return item.NAME.includes(searchItem)
            })
            setSearchText(searchItem)
            setTempCandidates(result)
        }
        
    }

    const getDepartmentData = async () => {
        setShouldLoadDepartment(true)
        let response = await getDepartments()
        for(let i = 0; i < response.length; i++){
            const obj = response[i]
            obj.active = false
        }
        const newObj = {
            ID: 0,
            NAME: 'All',
            active: true
        }
        response.unshift(newObj)
        setDepartments(response)
        setShouldLoadDepartment(false)
    }

    useEffect(()=>{
        const { action } = route.params
        setAction(action)
        loadCandidates()
        render(action)
        loadContent(action) 
        getDepartmentData()
    }, [])

    return(
        <>
            <SafeAreaView style={styles.main}>
            <StatusBar barStyle={ Platform.OS === 'ios'  ? 'dark-content' : 'light-content'}/>
            
                <MainHeader hasArrow title={title}/>
                <View style={styles.searchWrapper}>
                    <View style={styles.searchInnerWrapper}>
                        <AntDesign style={styles.icon} name="search1" size={23} />
                        <TextInput onChangeText={(text)=>onSearch(text)} value={searchText} placeholderTextColor='#000' style={styles.input} placeholder={`Search candidate to ${action}`} />
                    </View>
                </View>

                <View style={styles.nominees}>
                    <View style={{flexDirection: "row"}}>
                        <Text style={{fontSize:16, fontWeight:"700", alignSelf:"center"}}>Candidates</Text>
                        <AntDesign size={12} style={{marginLeft: 5, alignSelf: "center", top: 2.5}} name="right"/>
                    </View>
                    <Text style={{fontSize:15, fontWeight:"600", marginLeft: 5, alignSelf: "center", top: 2}}> { currentDepartment } </Text>
                </View>

                {
                    shouldLoad ? (
                    <> 
                    <MultiListItemAnimation/>
                     </> ) : !tempCandidates.length && isSearch ? (
                            <View style={{marginTop: 20, justifyContent: "center", alignItems: "center", padding: 20}}>
                                <Text style={{fontWeight: "600", textAlign: "center", fontSize: 17}}>No candidate found for "{ searchText }"</Text>
                            </View>
                     ) : (
                        <FlatList
                        data={tempCandidates}
                        renderItem={ ({item} : CandidateListType) =><ListView action={action} onVoteNominateHandler={onVoteNominateHandler}  item={item}/>}
                        />
                    )
                }
                

                <View style={{}}/>

            
            <View style={[styles.departmentListWrapper, { display: action === 'nominate' ? 'flex' : 'none' }]}>
                <View style={{marginBottom:10}}>
                <Text style={styles.departmentListWrapperText}>View by department</Text>
                {
                   shouldLoadDepartment ? <TwoLineAnimation/> : 
                   (
                    <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={departments}
                    renderItem={ ({item}: DepartmentTypeProps) => <DepartmentItem onCategorySelected={onCategorySelected} item={item}/>}
                    />
                   )
                }
                
                
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
        width: "100%"
        
    },
    departmentListWrapperText:{
        color: "black",
        fontWeight: "600",
        padding: 5,
        marginLeft: 5
    }
})



import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


// Write object to local storage
export const readLocalStorageObject  = async (name : string) =>{
    try{
        const data = (await AsyncStorage.getItem(name)) || ""
        if(data !== ""){
            return {
                message : "success",
                data : JSON.parse(data)
            }
        }else{
            return {
                message : "success",
                data : null
            }
        }   
        
    } catch (e) {
        return {
            message : "failed",
            error : e
        }
    }
}

export const writeLocalStorageObject  = async (name: string, payload : string) =>{
    try{
        await AsyncStorage.setItem(name, JSON.stringify(payload))
        return {
            message : "success"
        }
    } catch (e) {
        return {
            message : "failed",
            error : e
        }
    } 
}

export const writeLocalStorageString  = async (name: string, payload : string) =>{
    try{
        await AsyncStorage.setItem(name, payload)
        return {
            message : "success"
        }
    } catch (e) {
        return {
            message : "failed",
            error : e
        }
    } 
}

export const readLocalStorageString  = async (name : string) =>{
    try{
        const data = (await AsyncStorage.getItem(name)) || ""
        if(data !== "") {
            return {
                message : "success",
                data : JSON.parse(data)
            }
        }else{
            return {
                message : "success",
                data : null
            }
        }
        
    } catch (e) {
        return {
            message : "failed",
            error : e
        }
    }
}
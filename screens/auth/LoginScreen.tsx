import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import {
    FontAwesome5,
    AntDesign,
    Feather,
    Entypo,
    MaterialCommunityIcons,
    Ionicons,
  } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { showAlertPopup } from "../../helper/Alerts";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen(){

    const [email, setEmail] = useState<String>("")
    const [password, setPassword] = useState<String>("")
    const navigation = useNavigation()
    const [showHide, setShowHide] = useState(false)

    const validateEmail = (email: String) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const onLogin = () =>{
        if(email.trim() === "" || password === ""){
            showAlertPopup("Required", "All fields are required")
        }else if(!validateEmail(email)){
            showAlertPopup("Invalid", "Please enter a valid email address")
        }else{
            navigation.navigate("IntroductionScreen")
        }
    }

    return(
        <>
            <SafeAreaView style={styles.main}>

                <View style={styles.logoWrapper}>
                    <Image resizeMode="contain" style={styles.logo} source={require("../../assets/images/logo.png")}/>
                </View>

                <View style={styles.loginWrapper}>

                    <Text style={styles.loginWrapperTitle}>Sign In</Text>

                    <View style={{marginBottom: 20}}>
                        <Text style={{textAlign: "center"}}> Use your NamRA email address and password to successfully log into the app </Text>
                    </View>

                    <View style={styles.textFieldWrapper}>
                        <View style={styles.loginFieldPlaceholder}>
                            <Text style={styles.loginFieldPlaceholderText}>Email Address</Text>
                        </View>
                        <View style={styles.inputFieldIconLeft}>
                            <AntDesign style={styles.leftIcon} size={20} color={Colors.light.semiSecondary} name="mail"/>
                            <TextInput onChangeText={ (text)=>setEmail(text) } style={styles.inputField} placeholder="Enter email address"/>
                        </View>
                    </View>

                    <View style={{ height: 12}}/>

                    <View style={styles.textFieldWrapper}>
                        <View>
                            <View style={styles.passwordLoginFieldPlaceholder}>
                                <Text style={styles.loginFieldPlaceholderText}>Password</Text>
                            </View>
                            <View style={styles.inputFieldIconLeft}>
                                <AntDesign style={styles.leftIcon} size={25} color={Colors.light.semiSecondary} name="lock"/>
                                <TextInput onChangeText={ (text)=>setPassword(text) } secureTextEntry= {!showHide } style={styles.inputField} placeholder="Enter password"/>
                            </View>
                        </View>
                        {
                            !showHide ?
                            <TouchableOpacity onPress={()=>setShowHide( !showHide ) }  style={ {alignSelf:"center", marginRight:10} }>
                                <Feather size={20} name="eye"/>
                            </TouchableOpacity> 
                            :
                            <TouchableOpacity onPress={()=>setShowHide( !showHide ) }  style={ {alignSelf:"center", marginRight:10} }>
                                <Feather size={20} name="eye-off"/>
                            </TouchableOpacity> 
                        }
                    </View>
                   <View style={styles.forgotPasswordWrapper}>
                        <TouchableOpacity onPress={()=>navigation.navigate("ForgotPasswordScreen")}>
                            <Text>Forgot Password</Text>
                        </TouchableOpacity>
                   </View>
                    <TouchableOpacity onPress={onLogin} activeOpacity={0.6} style={styles.login}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                </View>

            </SafeAreaView>
        </>
    )

}

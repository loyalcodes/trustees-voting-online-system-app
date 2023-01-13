import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function LoginScreen(){

    return(
        <>
            <SafeAreaView style={styles.main}>

                <View style={styles.logoWrapper}>
                    <Image resizeMode="contain" style={styles.logo} source={require("../../assets/images/logo.png")}/>
                </View>

                <View style={styles.loginWrapper}>
                    <Text style={styles.loginWrapperTitle}>Sign In</Text>

                    <View style={styles.textFieldWrapper}>
                        <View style={styles.loginFieldPlaceholder}>
                            <Text style={styles.loginFieldPlaceholderText}>Email Address</Text>
                        </View>
                        <TextInput style={styles.inputField} placeholder="Enter email address"/>
                    </View>

                

                    <View style={styles.passwordTextFieldWrapper}>
                        <View style={styles.passwordLoginFieldPlaceholder}>
                            <Text style={styles.loginFieldPlaceholderText}>Password</Text>
                        </View>
                        <TextInput secureTextEntry style={styles.inputField} placeholder="Enter password"/>
                    </View>


                    <TouchableOpacity activeOpacity={0.6} style={styles.login}>
                        <Text style={styles.loginText}>Sign In</Text>
                    </TouchableOpacity>

                </View>

            </SafeAreaView>
        </>
    )

}

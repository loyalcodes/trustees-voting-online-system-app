import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor:Colors.light.white,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 200,
        height: 100,
        alignSelf: "center"
    },
    logoWrapper: {
        justifyContent: "center",
    },
    loginWrapper: {
       
    },
    loginWrapperTitle: {
        fontSize: 20,
        fontWeight:"600",
        alignSelf: "center",
        marginBottom: 50,
        color: Colors.light.semiSecondary,
        marginTop: 40,
        textAlign: "center"
        
    },
    textFieldWrapper: {
        borderColor: Colors.light.ashyGray,
        borderWidth:1,
        padding: 5,
        width: 320,
        alignSelf:"center",
        marginTop:20,
        borderRadius: 50,
        position: "relative",
        flexDirection: "row",
        justifyContent: "space-around",
    
    
    },
    loginFieldPlaceholder: {
        position: "absolute",
        backgroundColor: Colors.light.white,
        marginLeft: 18,
        marginTop: -10,
        width:105,

    },
    passwordLoginFieldPlaceholder: {
        position: "absolute",
        backgroundColor: Colors.light.white,
        marginLeft: 36,
        marginTop: -15,
        width:75,
        justifyContent: "center",
        
    },
    loginFieldPlaceholderText: {
        alignSelf: "center",
        fontWeight: "600",
        fontSize: 14
    },
    inputField: {
        height: 40,
        marginLeft: 8,
        fontSize: 18,
        width: "79%",
    },
    emailInputField: {
        height: 40,
        marginLeft: 8,
        fontSize: 18,
        width: "80%",
    },
    login: {
        backgroundColor: Colors.light.primary,
        width: 320,
        alignSelf:"center",
        marginTop: 20,
        padding: 10,
        borderRadius: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    loginText: {
       color: Colors.light.white,
       fontSize: 18,
       fontWeight: "600"
    },
    inputFieldIconLeft: {
        flexDirection: "row",
        
    },
    leftIcon: {
        alignSelf: "center",
        marginLeft: 10
    },
    forgotPasswordWrapper: {
        justifyContent: "center",
        alignItems:"center",
        marginTop: 10,
        padding:10
    }
})
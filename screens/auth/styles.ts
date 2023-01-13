import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor:Colors.light.white,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 200,
        height: 100,
        alignSelf: "center"
    },
    logoWrapper: {
        justifyContent: "center",
        marginBottom: 20
    },
    loginWrapper: {
       
    },
    loginWrapperTitle: {
        fontSize: 20,
        fontWeight:"600",
        alignSelf: "center"
    },
    textFieldWrapper: {
        borderColor: Colors.light.ashyGray,
        borderWidth:1,
        padding: 5,
        width: 320,
        alignSelf:"center",
        marginTop:20,
        borderRadius: 50,
        position: "relative"
    },
    passwordTextFieldWrapper: {
        borderColor: Colors.light.ashyGray,
        borderWidth:1,
        padding: 5,
        width: 320,
        alignSelf:"center",
        marginTop:20,
        borderRadius: 50,
        position: "relative"
    },
    loginFieldPlaceholder: {
        position: "absolute",
        backgroundColor: Colors.light.white,
        marginLeft: 30,
        marginTop: -10,
        width:100,

    },
    passwordLoginFieldPlaceholder: {
        position: "absolute",
        backgroundColor: Colors.light.white,
        marginLeft: 30,
        marginTop: -10,
        width:80,

    },
    loginFieldPlaceholderText: {
        alignSelf: "center",
        fontWeight: "600",
        fontSize: 14
    },
    inputField: {
        height: 40,
        marginLeft: 14,
        fontSize: 18
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
    }
})
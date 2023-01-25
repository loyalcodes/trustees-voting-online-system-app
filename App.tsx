import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View , StatusBar} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from "./components/Context";
import { readLocalStorageObject } from './helper/LocalStorage';
import RootStackScreens from './stacks/RootStackScreens';
import UserStackScreens from './stacks/UserStackScreens';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import LoginScreen from './screens/auth/LoginScreen';
import IntroductionScreen from './screens/IntroductionScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [logStatus, setLogStatus] = useState(false)

  const initialLoginState = {
    isLoading: true,
    state: false,
    userToken: null,
  };

  const loginReducer = (prevState: any, action: any) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userToken: action.token,
          state: action.state,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async () => {
        dispatch({ type: "LOGIN", id: "4354", token: "token" });
        },
      signOut: async () => {
        dispatch({ type: "RETRIEVE_TOKEN", token: null });
      }
    }),
    []
);

//Check user loggin history
const checkLogHistory = async () => {
  const result = await readLocalStorageObject("userData")
  if(result === null || result === undefined){
    dispatch({ type: "RETRIEVE_TOKEN", token: null });
  }else{
    dispatch({ type: "RETRIEVE_TOKEN", token: "token" });
  }
  
}

  useEffect (() =>{
    setTimeout(() => {
      checkLogHistory()
     // alert(loginState.userToken)
    }, 1000)
  }, [])

  if (!isLoadingComplete) {
    return (
      <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator color="#0000ff" size={"large"} />
      </View>
    )
  } else {

    return (
        <AuthContext.Provider value={ authContext }>
          <StatusBar barStyle="dark-content"/>
        {
          loginState.userToken !== null ? (
            <NavigationContainer>
              <UserStackScreens/> 
            </NavigationContainer>
          ):(
            <NavigationContainer>
              <RootStackScreens/> 
            </NavigationContainer>
          )
        }
        
        </AuthContext.Provider>
    );
  }
}

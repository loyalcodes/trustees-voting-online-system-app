import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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

  const initialLoginState = {
    isLoading: true,
    state: false
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
      signIn: async () => {},
      signOut: async () => {}
    }),
    []
);

//Check user loggin history
const checkLogHistory = async () => {
  const { message, data } = await readLocalStorageObject("@storage_UserDataKey")
  if(data === null){
      //User not logged in
  }
}

  useEffect (() =>{
    setTimeout(() => {
      checkLogHistory()
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
      <SafeAreaProvider>
        <AuthContext.Provider value={ authContext }>
        {
          loginState.state ? (
            <NavigationContainer>
              <UserStackScreens/> 
            </NavigationContainer>
          ):(
            <NavigationContainer>
              <RootStackScreens/> 
            </NavigationContainer>
          )
        }
        <StatusBar />
        </AuthContext.Provider>
      </SafeAreaProvider>
    );
  }
}

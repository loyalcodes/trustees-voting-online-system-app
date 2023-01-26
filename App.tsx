import React, { useEffect, useState } from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'localstorage-polyfill'
import { Linking } from 'react-native';
import UserStackScreens from './stacks/UserStackScreens';
import RootStackScreens from './stacks/RootStackScreens';
import { AuthContext } from './components/Context';

const Stack = createStackNavigator();

const App = () => {
  const [userRole, setUserRole] = useState(null);

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
        showRoot: true,
        userRole:null
      };

    const loginReducer = (prevState: any, action: any) => {
        switch (action.type) {
          case "RETRIEVE_TOKEN":
            return {
              ...prevState,
              userToken: action.token,
              userRole:action.role,
              isLoading: false,
            };
          case "ONSERVICECOMPLETED":
            return {
              ...prevState,
              userToken: action.token,
              userRole:action.role,
              isLoading: false,
            };
          case "LOGIN":
            return {
              ...prevState,
              userName: action.id,
              userToken: action.token,
              isLoading: false,
              userRole:action.role
            };
          case "ROOT":
            return {
              ...prevState,
              userName: action.id,
              userToken: action.token,
              isLoading: false,
              showRoot: true,
            };
          case "LOGOUT":
            return {
              ...prevState,
              userName: null,
              userToken: null,
              isLoading: false,
            };
          case "REGISTER":
            return {
              ...prevState,
              userName: action.id,
              userToken: action.token,
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
          toRoot: () => {
            return null;
          },
          signIn: async () => {
            dispatch({ type: "LOGIN", id: "4354", token: "token" });
          },
          signOut: async () => {
            await AsyncStorage.removeItem("userData");
            dispatch({ type: "RETRIEVE_TOKEN", token: null });
          },
          signUp: () => {
            //setUserToken("asas");
            // setIsLoading(false);
          },
          onServiceCompeted: async()=>{
            dispatch({ type: "RETRIEVE_TOKEN", token: "token" });
            await AsyncStorage.setItem("@storage_UserRole", "nurse");
          },
          toMain: () => {},
        }),
        []
      );

    useEffect(() => {

   /*    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: false,
        }),
      }); */
/* 
      const BACKGROUND_NOTIFICATION_TASK = 'BACKGROUND-NOTIFICATION-TASK';
      TaskManager.defineTask(BACKGROUND_NOTIFICATION_TASK, ({ data, error, executionInfo }) => {
        console.log('Received a notification in the background!');
        // Do something with the notification data
      });
      Notifications.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK);
      const subscription = Notifications.addNotificationResponseReceivedListener(response => {
        const url = response.notification.request.content.data.url;
        alert(JSON.stringify(response))
        //Linking.openURL(url);
      });
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'BLACK FRIDAY OFFER',
          body: "Get your meal for only N$65.00",
        },
        trigger: null,
      });
      setTimeout(()=>{
        Notifications.scheduleNotificationAsync({
          content: {
            title: 'HUNGRY?',
            body: "Checkout the nearest restaurant now!",
          },
          trigger: null,
        });
      },15000)
      
 */

        setTimeout(() => {
          const userData = async () => {
            const userData =
              (await AsyncStorage.getItem("userData")) || "{}";
            const jsonValue = JSON.parse(userData);
            if (jsonValue.id === undefined) {
              dispatch({ type: "RETRIEVE_TOKEN", token: null });
            } else {
              dispatch({ type: "RETRIEVE_TOKEN", token: "token" });
            }
          };
    
          userData();

        }, 1000);
      }, []);


      if (loginState.isLoading) {
        return (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StatusBar barStyle="dark-content"/>
            <ActivityIndicator color="#0000ff" size={"large"} />
          </View>
        );
      } else {
        return (
          <AuthContext.Provider value={authContext}>
            <SafeAreaProvider>
              {
              
              loginState.userToken != null ? (
                 
                <NavigationContainer>
                  <UserStackScreens />
                </NavigationContainer>
              ) : (
                <NavigationContainer>
                  <RootStackScreens />
                </NavigationContainer>
              )}
            </SafeAreaProvider>
          </AuthContext.Provider>
        );
        
      }


    
}

export default App;
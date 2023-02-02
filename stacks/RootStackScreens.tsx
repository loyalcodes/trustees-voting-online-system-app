import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IntroductionScreen,
         LoginScreen, 
         ForgotPasswordScreen, 
         NominateScreen, 
         UserScreen, 
         UserNomineesScreen,
         NotificationScreen,
         NotificationContentScreen,
         DocumentUploadScreen,
         UserProfileScreen
         } from '../screens'

const RootStack = createStackNavigator()

export default () => (

    <RootStack.Navigator screenOptions={{
        headerShown: false
      }}>
         
        <RootStack.Screen name='LoginScreen' component={LoginScreen} />
        <RootStack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
        <RootStack.Screen name='IntroductionScreen' component={IntroductionScreen} />
        <RootStack.Screen name='NominateScreen' component={NominateScreen} />
        <RootStack.Screen name='UserScreen' component={UserScreen} />
        <RootStack.Screen name='UserNomineesScreen' component={UserNomineesScreen} />
        <RootStack.Screen name='NotificationScreen' component={NotificationScreen} />
        <RootStack.Screen name='NotificationContentScreen' component={NotificationContentScreen} />
        <RootStack.Screen name='DocumentUploadScreen' component={DocumentUploadScreen} />
        <RootStack.Screen name='UserProfileScreen' component={DocumentUploadScreen} />
    </RootStack.Navigator>
)


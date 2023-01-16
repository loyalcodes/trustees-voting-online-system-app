import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IntroductionScreen, LoginScreen, ForgotPasswordScreen, NominateScreen } from '../screens'

const RootStack = createStackNavigator()

export default () => (

    <RootStack.Navigator headerMode="none">
         
        <RootStack.Screen name='LoginScreen' component={LoginScreen} />
        <RootStack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
        <RootStack.Screen name='IntroductionScreen' component={IntroductionScreen} />
        <RootStack.Screen name='NominateScreen' component={NominateScreen} />
       
    </RootStack.Navigator>
)


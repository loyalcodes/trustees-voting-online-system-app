import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IntroductionScreen, LoginScreen } from '../screens'

const RootStack = createStackNavigator()

export default () => (

    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name='LoginScreen' component={LoginScreen} />
    </RootStack.Navigator>
)


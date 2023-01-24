import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IntroductionScreen, NominateScreen, UserNomineesScreen, UserScreen, LoginScreen } from '../screens'

const RootStack = createStackNavigator()

export default () => (

    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name='UserScreen' component={UserScreen} />
        <RootStack.Screen name='NominateScreen' component={NominateScreen} />
        <RootStack.Screen name='IntroductionScreen' component={IntroductionScreen} />
        <RootStack.Screen name='UserNomineesScreen' component={UserNomineesScreen} />
        <RootStack.Screen name='LoginScreen' component={LoginScreen} />
    </RootStack.Navigator>
)

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IntroductionScreen, NominateScreen, UserNomineesScreen } from '../screens'

const RootStack = createStackNavigator()

export default () => (

    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name='NominateScreen' component={NominateScreen} />
        <RootStack.Screen name='IntroductionScreen' component={IntroductionScreen} />
        <RootStack.Screen name='UserNomineesScreen' component={UserNomineesScreen} />
    </RootStack.Navigator>
)

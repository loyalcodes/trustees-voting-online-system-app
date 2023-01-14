import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IntroductionScreen } from '../screens'

const RootStack = createStackNavigator()

const RootStackScreens = () =>{

    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name='IntroductionScreen' component={IntroductionScreen} />
    </RootStack.Navigator>

}

export default RootStackScreens;

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IntroductionScreen, NominateScreen, UserNomineesScreen, UserScreen, LoginScreen, UserProfileScreen, VotedUserProfileScreen } from '../screens'

const RootStack = createStackNavigator()

const UserStackScreens = () => (

    <RootStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <RootStack.Screen name='IntroductionScreen' component={IntroductionScreen} />
        <RootStack.Screen name='UserScreen' component={UserScreen} />
        <RootStack.Screen name='NominateScreen' component={NominateScreen} />
        <RootStack.Screen name='UserNomineesScreen' component={UserNomineesScreen} />
        <RootStack.Screen name='LoginScreen' component={LoginScreen} />
        <RootStack.Screen name='UserProfileScreen' component={UserProfileScreen} />
        <RootStack.Screen name='VotedUserProfileScreen' component={VotedUserProfileScreen} />
    </RootStack.Navigator>
)

export default UserStackScreens;

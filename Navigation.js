import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../zoom_clone/screens/Home'
import MeetingRoom from '../zoom_clone/screens/MeetingRoom'

function Navigation() {
    const Stack = createStackNavigator();

    return (
       <NavigationContainer>
           <Stack.Navigator initialRouteName={Home}>
               <Stack.Screen name="Home" component={Home} options={{
                   headerShown: false
               }} />
               <Stack.Screen name="Room" component={MeetingRoom} options={{title: 'Start a meeting', headerStyle: {
                   backgroundColor: '#1c1c1c',
                   shadowOpacity: 1,
               },   headerTintColor: "white",
               }} />
           </Stack.Navigator>
       </NavigationContainer>
    )
}

export default Navigation

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import AuthStack from './authStack/AuthStack';
import StackContainer from './stack/Stack';

const AppStackNavigator = createNativeStackNavigator();

export default function Navigation() {
    const isUserLoggedIn = useSelector(state => state.AuthReducer.isUserLoggedIn)

    return (
        <AppStackNavigator.Navigator screenOptions={{ headerShown: false }}>
            {!isUserLoggedIn ? (
                <AppStackNavigator.Screen
                    name="AuthStack"
                    component={AuthStack}
                />
            ) : (
                <AppStackNavigator.Screen
                    name="StackContainer"
                    component={StackContainer}
                />
            )}
        </AppStackNavigator.Navigator>
    )
}
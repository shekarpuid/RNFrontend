import React, { memo, useState, useEffect, useMemo } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AsyncStorage from '@react-native-community/async-storage'

import { Loader } from './components/Loader'
import Login from './screens/auth/Login'
import Home from './screens/private/Home'
import Profile from './screens/private/Profile'
import Settings from './screens/private/Settings'
import DrawerNavigator from './navigation/DrawerNavigator'
import { AuthContext } from './components/context'

import styles from './Styles'

const AuthStack = createStackNavigator()
const Drawer = createDrawerNavigator()
const TabStack = createBottomTabNavigator()

const Routes = () => {
    // Normally we use like this
    // const [isLoading, setIsLoading] = useState(true)
    // const [userToken, setUserToken] = useState(null)

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    } 

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                } 
                console.log(prevState.isLoading)
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                } 
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false,
                } 
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                } 
        }
    } 

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

    const authContext = React.useMemo(() => ({
        signIn: async (foundUser) => {
            // setUserToken('fgkj') 
            // setIsLoading(false) 
            const userToken = String(foundUser[0].userToken) 
            const userName = foundUser[0].username 

            try {
                await AsyncStorage.setItem('userToken', userToken)
            } catch (e) {
                console.log(e) 
            }
            // console.log('user token: ', userToken) 
            dispatch({ type: 'LOGIN', id: userName, token: userToken }) 
        },
        signOut: async () => {
            // setUserToken(null) 
            // setIsLoading(false) 
            try {
                await AsyncStorage.removeItem('userToken') 
            } catch (e) {
                console.log(e) 
            }
            dispatch({ type: 'LOGOUT' }) 
        },
        signUp: () => {
            // setUserToken('fgkj') 
            // setIsLoading(false) 
        },
        // toggleTheme: () => {
        //     setIsDarkTheme(isDarkTheme => !isDarkTheme) 
        // }
    }), []) 

    useEffect(() => {
        setTimeout(async () => {
            // setIsLoading(false) 
            let userToken 
            userToken = null 
            try {
                userToken = await AsyncStorage.getItem('userToken') 
            } catch (e) {
                console.log(e) 
            }
            // console.log('user token: ', userToken) 
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken }) 
        }, 1000) 
    }, []) 

    if (loginState.isLoading) {
        return <Loader />
    }

    const AuthStackNavigator = ({ navigation }) => (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Login" component={Login} />
        </AuthStack.Navigator>
    )

    const TabStackNavigator = ({ navigation }) => (
        <TabStack.Navigator
            screenOptions={{ headerShown: false }} 
            tabBarOptions={{
                style: {
                    backgroundColor: '#000',
                },
                activeTintColor: "#CC0000",
                inactiveTintColor: '#dedede',
            }}
            swipeEnabled
            initialRoute="Home"
        >
            <TabStack.Screen name="Home" component={Home} />
            <TabStack.Screen name="Profile" component={Profile} />
        </TabStack.Navigator>
    )

    return (
        // One way of navigators
        // <AuthContext.Provider value={authContext}>
        //     <NavigationContainer>
        //         {userToken !== null ? (
        //             <Drawer.Navigator initialRouteName="Home">
        //                 <Drawer.Screen name="Home" component={TabStackNavigator} />
        //                 <Drawer.Screen name="Settings" component={Settings} />
        //             </Drawer.Navigator>
        //         )
        //             :
        //             <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        //                 <AuthStack.Screen name="Login" component={Login} />
        //             </AuthStack.Navigator>
        //         }
        //     </NavigationContainer>
        // </AuthContext.Provider>

        // Second way of navigators
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {loginState.userToken !== null ? (
                    <DrawerNavigator />
                ) : (
                        <AuthStackNavigator />
                    )
                }
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default Routes
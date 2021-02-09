import React from 'react'
import { SafeAreaView, StatusBar, Platform } from 'react-native'

// Local imports
import Routes from './Routes'
import styles from './Styles'

const App = () => {
    return (
        <>
            <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} backgroundColor="#CC0000" />
            <SafeAreaView style={[styles.safeAreaView]}>
                <Routes />
            </SafeAreaView>
        </>
    )
}

export default App
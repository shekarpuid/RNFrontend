import React from 'react'
import { SafeAreaView, StatusBar, Platform, View } from 'react-native'

// redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Local imports
import rootReducer from './reducers'
import Routes from './Routes'
import styles from './Styles'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight

const App = () => {
    return (
        <>
            <View style={{
                width: "100%",
                height: STATUS_BAR_HEIGHT,
                backgroundColor: '#CC0000'
            }}>
                <StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'light-content'} backgroundColor="#CC0000" />
            </View>
            <SafeAreaView style={[styles.safeAreaView]}>
                <Provider store={store}>
                    <Routes />
                </Provider>
            </SafeAreaView>
        </>
    )
}

export default App
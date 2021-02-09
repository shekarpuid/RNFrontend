import React from 'react'
import { SafeAreaView, StatusBar, Platform } from 'react-native'

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

const App = () => {
    return (
        <>
            <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} backgroundColor="#CC0000" />
            <SafeAreaView style={[styles.safeAreaView]}>
                <Provider store={store}>
                    <Routes />
                </Provider>
            </SafeAreaView>
        </>
    )
}

export default App
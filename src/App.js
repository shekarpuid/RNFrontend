import React from 'react'
import { SafeAreaView, StatusBar, Platform, View, StyleSheet } from 'react-native'

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
            {/* <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} backgroundColor="#CC0000" /> */}

            <View style={styless.StatusBar}>
                <StatusBar translucent barStyle="light-content" />
            </View>
            <SafeAreaView style={[styles.safeAreaView]}>
                <Provider store={store}>
                    <Routes />
                </Provider>
            </SafeAreaView>
        </>
    )
}
const STATUSBAR_HEIGHT = StatusBar.currentHeight

const styless = StyleSheet.create({
    StatusBar: {
        height: Platform.OS === 'ios' ? 44 : STATUSBAR_HEIGHT,
        backgroundColor: '#CC0000'
    }
});
export default App

// import React, {Component} from "react";
// import {StyleSheet, StatusBar, View, Platform,Text} from "react-native";

// const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 48 : StatusBar.currentHeight;

// function StatusBarPlaceHolder() {
//     return (
//         <View style={{
//             width: "100%",
//             height: STATUS_BAR_HEIGHT,
//             backgroundColor: "blue"
//         }}>
//             <StatusBar
//                 barStyle="light-content"
//             />
//         </View>
//     );
// }

// class App extends Component {
//     render() {
//         return (
//             <View style={{flex: 1}}>
//                 <StatusBarPlaceHolder/>
//                 <Text>...YourContent</Text>
//             </View>
//         );
//     }
// }

// export default App
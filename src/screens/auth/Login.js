import React, { memo } from 'react'
import { View, TextInput, TouchableOpacity, Alert, SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native'
import Text from '../../components/Text'
import Splash from '../../components/Splash'
import { AuthContext } from '../../components/context'
import Users from './users'
import styles from '../../Styles'
import Icon from 'react-native-vector-icons/Ionicons'

const Login = () => {
    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')

    const submitHandler = () => {
        alert("Pressed!")
        setUserName('')
        setPassword('')
    }

    const { signIn } = React.useContext(AuthContext)
    const loginHandle = (userName, password) => {

        const foundUser = Users.filter(item => {
            return userName == item.username && password == item.password;
        })

        if (userName.length == 0 || password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }

        if (foundUser.length == 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                { text: 'Okay' }
            ]);
            return;
        }
        signIn(foundUser)
        console.log(foundUser)
    }

    return (
        <>
            <View style={[styles.flex1, styles.vhCenter, styles.ph20]}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setUserName(text)}
                    value={userName}
                    placeholder="Enter username" autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder="Enter password"
                    secureTextEntry={true} autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={() => loginHandle(userName, password)}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default memo(Login)
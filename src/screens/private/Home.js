import React, { memo } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Text from '../../components/Text'
import Splash from '../../components/Splash'
import { AuthContext } from '../../components/context'
import styles from '../../Styles'

const Home = (props) => {
    const { navigation } = props
    const { signOut } = React.useContext(AuthContext)
    return (
        <>
            <View style={[styles.flex1, styles.vhCenter, styles.ph20]}>
                <Text style={styles.heading}>Home</Text>
                <TouchableOpacity style={[styles.button, styles.mb15]} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.buttonText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.mb15]} onPress={() => signOut()}>
                    <Text style={styles.buttonText}>Signout</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default memo(Home)
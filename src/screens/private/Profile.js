import React, { memo } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Text from '../../components/Text'
import Splash from '../../components/Splash'
import { AuthContext } from '../../components/context'
import styles from '../../Styles'

const Profile = () => {
    return (
        <>
            <View style={[styles.flex1, styles.vhCenter, styles.ph20]}>
                <Text style={styles.heading}>Profile</Text>
            </View>
        </>
    )
}

export default memo(Profile)
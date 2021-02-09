import React, { memo } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Text from '../../components/Text'
import Splash from '../../components/Splash'
import { AuthContext } from '../../components/context'
import styles from '../../Styles'

const Settings = () => {
    return (
        <>
            <View style={[styles.flex1, styles.vhCenter, styles.ph20]}>
                <Text style={styles.heading}>Settings</Text>
            </View>
        </>
    )
}

export default memo(Settings)
import React, { memo } from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles'

const Splash = () => {
    return(
        <>
            <View style={[styles.flex1, styles.vhCenter]}>
                <Text>Splash</Text>
            </View>
        </>
    )
}

export default memo(Splash)
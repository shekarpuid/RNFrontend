import React, { memo } from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles'

const Sample = () => {
    return(
        <>
            <View style={styles.flex1}>
                <Text>Sample</Text>
            </View>
        </>
    )
}

export default memo(Sample)
import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import styles from '../Styles'

export const Loader = () => {
    return(
        <View style={[styles.flex1, styles.vhCenter]}>
            <ActivityIndicator size="large" color="#CC0000" />
            <Text style={styles.mt15}>Loading...</Text>
        </View>
    )
}
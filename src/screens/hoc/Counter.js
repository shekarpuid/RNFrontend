import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'
import Text from '../../components/Text'
import styles from '../../Styles'

const Counter = () => {
    return(
        <>
        {console.log('counter')}
            <View style={[styles.flex1, styles.vhCenter]}>
                <Text style={styles.heading}>Counter HOC</Text>
                <CounterOne />
                <CounterTwo />
            </View>
        </>
    )
}

export default Counter
import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import Text from '../../components/Text'
import styles from '../../Styles'
import CounterHOC from './CounterHOC'

const CounterOne = (props) => {
    const {count, increment} = props

    return(
        <>
            {/* {console.log('counter 1')} */}
            <View>
                <TouchableOpacity onPress={() => increment()} style={[styles.button, styles.mb15]}>
                    <Text style={styles.buttonText}>Clicked {count} times</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default CounterHOC(CounterOne)
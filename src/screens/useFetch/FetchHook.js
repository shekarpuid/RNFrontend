import React, { useState, memo } from 'react'
import { View, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import Text from '../../components/Text'
import { UseFetch } from '../../hooks/UseFetch'
import styles from '../../Styles'

const FetchHook = (props) => {
    const api = 'https://jsonplaceholder.typicode.com/photos?_limit=50'
    const { loading, data, error } = UseFetch(api, null)

    return (
        <>
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <Text style={styles.heading}>Use Fetch Hook</Text>
                    {loading ? <ActivityIndicator size='large' color='#CC0000' /> : null}
                    {data !== null ? data.map((item, index) => {
                        return <View style={{flexDirection: 'row', paddingVertical: 5}}>
                            <Text key={item.id} style={{fontWeight: 'bold'}}>{index + 1}. </Text>
                            <Text key={item.id} style={{textTransform: 'capitalize'}}>{item.title}</Text>
                        </View>
                    }) : data !== null && data.length === 0 ? <Text>No data found.</Text> : null}
                    {error ? <Text>Something went wrong!! Please try again later.</Text> : null}
                </View>
            </ScrollView>
        </>
    )
}

export default memo(FetchHook)


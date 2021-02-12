import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, TextInput, View } from 'react-native'
import Text from '../components/Text'
import { UseFetch } from '../hooks/UseFetch'
import styles from '../Styles'

export default UsersSearch = () => {
    const api = 'http://jsonplaceholder.typicode.com/users'
    const { loading, data, error } = UseFetch(api)

    const [filterData, setFilterData] = useState(null)
    const [value, setValue] = useState(null)

    useEffect(() => {
        setFilterData(data)
    }, [])

    const onChangeText = (text) => {
        setValue(text)
        let searchResult = data.filter(item => item.name.includes(text))
        setFilterData(searchResult)
    }
    return (
        <>
            {console.log('filter data ', JSON.stringify(filterData))}
            {console.log('data', JSON.stringify(filterData))}
            <View style={styles.container}>
                <Text style={[styles.heading, styles.alignCenter]}>Users Search</Text>
                <TextInput
                    style={{ height: 40, borderColor: '#ddd', borderWidth: 1, borderRadius: 20, 
                    paddingHorizontal: 20, marginBottom: 20, backgroundColor: '#fff' }}
                    onChangeText={text => onChangeText(text)}
                    value={value} placeholder="Search" placeholderTextColor="#ddd"
                />

                {loading ? <ActivityIndicator size='large' color='#cc0000' /> : null}
                {filterData !== null && filterData.length === 0 ? <Text style={styles.alignCenter}>No results found.</Text> : null}
                {error ? <Text style={styles.alignCenter}>Something went wrong.</Text> : null}
                <FlatList contentContainerStyle={{backgroundColor: 'transparent'}}
                    data={filterData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return <View style={styles.userItem}>
                            <View style={styles.userAvatar}>
                                <Text style={[styles.whiteColor, styles.fwBold, styles.fs18]}>{item.name.substring(0, 2)}</Text>
                            </View>
                            <View style={styles.userInfo}>
                                <Text style={[styles.fwBold, styles.fs18, styles.blackColors]} numberOfLines={1}>{item.name}</Text>
                                <Text style={styles.userName}>{item.username}</Text>
                            </View>
                        </View>
                    }}
                    showsVerticalScrollIndicator={false} bounces={false}
                />
            </View>
        </>
    )
}
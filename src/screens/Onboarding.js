import React, { useState, useRef } from 'react'
import { FlatList, View, Dimensions, useWindowDimensions, Animated } from 'react-native'
import Text from '../components/Text'
import styles from '../Styles'

// const {width, height} = Dimensions.get('window')

const Onboarding = () => {
    const { width } = useWindowDimensions()
    const scrollX = useRef(new Animated.Value(0)).current
    const slidesRef = useRef(null)

    const data = [
        { id: '1', title: 'Screen 1', description: 'Description 1' },
        { id: '2', title: 'Screen 2', description: 'Description 2' },
        { id: '3', title: 'Screen 3', description: 'Description 3' },
        { id: '4', title: 'Screen 4', description: 'Description 4' },
    ]
    return (
        <>
            {console.log(width)}
            <View style={styles.flex1}>
                {/* <Text style={[styles.heading, {alignSelf: 'center', marginTop: 15}]}>Onboarding</Text> */}
                
                {/* Slides */}
                <FlatList
                    data={data} keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return <View style={{ flex: 1, width: width, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </View>
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled 
                    bounces={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    ref={slidesRef}
                />

                {/* Paginator */}
                <View style={{flexDirection: 'row', height: 64, justifyContent: 'center'}}>
                    {data.map((_, index) => {
                        const inputRange = [(index - 1) * width, index * width , (index + 1) * width]
                        const dotWidth = scrollX.interpolate({
                            // inputRange: [(index - 1) * width, index * width , (index + 1) * width] or
                            inputRange,
                            outputRange: [10, 20, 10],
                            extrapolate: 'clamp'
                        })
                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return <Animated.View 
                            style={{height: 10, borderRadius: 5, backgroundColor: '#493d8a', 
                            marginHorizontal: 8, width: dotWidth, opacity: opacity}} key={index.toString()} 
                        />
                    })}
                </View>
            </View>
        </>
    )
}

export default Onboarding
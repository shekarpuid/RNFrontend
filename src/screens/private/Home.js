import React, { memo, useEffect, useState } from 'react'
import { View, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, TouchableNativeFeedbackBase } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Local imports
import Text from '../../components/Text'
import Splash from '../../components/Splash'
import { AuthContext } from '../../components/context'
import styles from '../../Styles'

import { fetchPosts } from '../../actions/postsActions'
import Feed from '../../components/Feed'

const Home = (props) => {
    const { navigation, dispatch, loading, posts, hasErrors, count } = props
    const { signOut } = React.useContext(AuthContext)
    const [items, setItems] = useState(20)

    const feeds = [
        { id: 1, title: 'Feed one', isLiked: true },
        { id: 2, title: 'Feed two', isLiked: false },
        { id: 3, title: 'Feed three', isLiked: true },
    ]

    useEffect(() => {
        dispatch(fetchPosts())
        // console.log(JSON.stringify(posts))
    }, [dispatch])

    const loadMore = () => {
        setItems(items + 20)
    }

    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 2;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    }

    return (
        <ScrollView
            // onMomentumScrollEnd={() => loadMore()} scrollEventThrottle={100}
            onScroll={({ nativeEvent }) => {
                if (isCloseToBottom(nativeEvent)) {
                    loadMore();
                }
            }}
            scrollEventThrottle={100}
        >
            <View style={{padding: 20}}>
                {feeds.map(item => {
                    // console.log(JSON.stringify(item))
                    return <Feed item={item} key={item.id} />
                })}
            </View>
            <View style={[styles.flex1, styles.vhCenter, styles.ph20]}>
                {/* <Text style={styles.heading}>Posts</Text> */}
                <Text style={{ marginTop: 25 }}>Count: {count}</Text>
                {loading ? <ActivityIndicator size="large" color="#CC0000" /> : null}
                {posts.map((post, index) => {
                    if (index + 1 <= items)
                        return <Text key={post.id} style={{ textAlign: 'center', paddingVertical: 12.5 }} numberOfLines={1}>{post.id}. {post.title}</Text>
                })}
                <TouchableOpacity style={[styles.button, styles.mb15]} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.buttonText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.mb15]} onPress={() => signOut()}>
                    <Text style={styles.buttonText}>Signout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
    count: state.posts.count
})

export default connect(mapStateToProps)(memo(Home))
import React, { memo, useEffect, useState, useRef } from 'react'
import { View, TouchableOpacity} from 'react-native'

// Local imports
import Text from './Text'
import styles from '../Styles'
import LottieView from 'lottie-react-native'

const Feed = (props) => {
    const {item} = props
    const [isLiked, setIsLiked] = useState(item.isLiked)
    const animation = useRef(isLiked)
    const [isFirstRun, setIsFirstRun] = useState(true)


    useEffect(() => {
        console.log(JSON.stringify('Feed',props))
        if (isFirstRun) {
            if (isLiked) {
                animation.current.play(66, 66)
            } else {
                animation.current.play(19, 19)
            }
            setIsFirstRun(false)
        } else if(isLiked){
            animation.current.play(19, 50)
            console.log("liked")
        }else{
            animation.current.play(0, 19)
        }
    }, [isLiked])

    const onLikePost = () => {
        setIsLiked(!isLiked)
    }

    return (
        <View>
            {console.log(JSON.stringify(item))}
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => onLikePost()}>
                <LottieView
                    ref={animation}
                    style={styles.heartLottie}
                    source={require('../../assets/like.json')}
                    autoPlay={false}
                    loop={false}
                />
            </TouchableOpacity>
        </View>
    )
}
export default Feed
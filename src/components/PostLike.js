import React, { memo, useEffect, useState, useRef } from 'react'
import { View, TouchableOpacity} from 'react-native'

// Local imports
import Text from './Text'
import styles from '../Styles'
import LottieView from 'lottie-react-native'

const PostLike = (props) => {
    const [isLiked, setIsLiked] = useState(false)
    const animation = useRef(isLiked)
    const [isFirstRun, setIsFirstRun] = useState(true)


    useEffect(() => {
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

export default PostLike
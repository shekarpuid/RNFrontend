import React from 'react'
import {Text} from 'react-native'
export default props => <Text {...props} style={[{fontFamily: 'CarmenSans-Regular'}, props.style]}>{props.children}</Text>
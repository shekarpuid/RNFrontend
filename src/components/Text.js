import React from 'react'
import {Text} from 'react-native'
// fontFamily: 'CarmenSans-Regular'
export default props => <Text {...props} style={[{fontSize: 14, fontFamily: 'NunitoSans-Regular'}, props.style]}>{props.children}</Text>
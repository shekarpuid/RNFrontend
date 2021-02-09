import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    safeAreaView: {flex: 1},
    // helper styles
    flex1: {flex: 1},
    vhCenter: {alignItems: 'center', justifyContent: 'center'},
    ph20: {paddingHorizontal: 20},
    mb15: {marginBottom: 15},
    mt15: {marginTop: 15},
    heading:{fontWeight: 'bold', fontSize: 25, marginBottom: 15},
    input: {width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 15,paddingVertical: 10, marginBottom: 15},
    button: {paddingHorizontal: 25, paddingVertical: 10, backgroundColor: '#CC0000', borderRadius: 8},
    buttonText: {color: '#fff', fontSize: 16}

})

export default styles
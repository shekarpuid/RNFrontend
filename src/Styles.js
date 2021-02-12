import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')
const lob = 'Lobster-Regular'; const nunito = 'NunitoSans-Regular';

const styles = StyleSheet.create({
    safeAreaView: {flex: 1},
    container: {flex: 1, padding: 20},

    // helper styles
    flex1: {flex: 1},
    vhCenter: {alignItems: 'center', justifyContent: 'center'},
    alignCenter: {alignSelf: 'center'},
    ph20: {paddingHorizontal: 20},
    mb15: {marginBottom: 15},
    mt15: {marginTop: 15},
    fwBold: {fontWeight: 'bold'},
    fs18: {fontSize: 18},
    blackColor: {color: '#000'}, whiteColor: {color: '#fff'},
    heading:{fontWeight: 'bold', fontSize: 25, marginBottom: 15,fontFamily: lob},
    input: {fontFamily: nunito, width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 15,paddingVertical: 10, marginBottom: 15},
    button: {paddingHorizontal: 25, paddingVertical: 10, backgroundColor: '#CC0000', borderRadius: 8},
    buttonText: {color: '#fff', fontSize: 16},

    // Like styles
    heartLottie: {width: 50, height: 50},

    // User search styles
    userItem: {flexDirection: 'row', marginBottom: 15, alignItems: 'center'},
    userAvatar: {width: 50, height: 50, backgroundColor: '#cc0000', borderRadius: 50/2, marginRight: 15,alignItems: 'center', justifyContent: 'center'}, 
    userInfo:{},
    userName: {opacity: 0.5}

})

export default styles
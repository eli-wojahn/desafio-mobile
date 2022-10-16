import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
      },
    bluBox: {
        backgroundColor: '#5984C0',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: 335,
        height: 47,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    textWhiteBox: {
        color: 'black',
        fontFamily: 'Roboto_400Regular',
        fontSize: 16
    },
    witheBox: {
        backgroundColor: 'white',
        width: 335,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        margin: 50
      },
      witheBox2: {
        backgroundColor: 'white',
        width: 335,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        margin: 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      },

});

export default styles;
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
        padding: 25,
        width: 335,
        height: 47,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    textBlue: {
        color: 'white',
        fontFamily: 'Roboto_400Regular',
        fontSize: 16
    },
    elipse: {
        width: 8,
        height: 8
    }
});

export default styles;
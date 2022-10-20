import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      },
      separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#DFDFDF'
      },
      
      

});

export default styles;
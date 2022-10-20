import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  inputBoxFora: {
    flexDirection: "row",
    backgroundColor: 'white',
    width: 335,
    height: 48,
    borderColor: '#DFDFDF',
    margin: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 1,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#9E9E9E',
    justifyContent: 'space-between'
  },
  textoInput: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#9E9E9E'
  },
  serchIcon: {
    height: 28,
    width: 28,

  }
});

export default styles;
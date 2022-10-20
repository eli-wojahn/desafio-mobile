import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')}
        style={styles.logo} />
    </View>
  );
};


export default Header;
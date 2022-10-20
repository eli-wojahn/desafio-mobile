import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { useFonts, Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';

const Title = () => {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium
      });
    
      if (!fontsLoaded) {
        return null;
      }
    return (
      <View>
        <Text style={styles.text}>Funcionários</Text>
      </View>
    );
  };


  export default Title;
import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';

const BlueBox = () => {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
        <View style={styles.bluBox}>
            <Text style={styles.textBlue}>FOTO</Text>
            <Text style={styles.textBlue}>NOME</Text>
            <Text style={styles.textBlue}>PONTO</Text>
        </View>
        </View>
    );
};


export default BlueBox;
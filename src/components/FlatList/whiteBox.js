import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';

import FlatList from './flatList';

const WhiteBox = () => {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <FlatList/>
        </View>
    );
};


export default WhiteBox;
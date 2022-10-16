import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';

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
        <View style={styles.witheBox2}>
            <Text style={styles.textWhiteBox}>FOTO</Text>
            <Text style={styles.textWhiteBox}>NOME</Text>
            <Text style={styles.textWhiteBox}>SETA</Text>
        </View>
        <View style={styles.witheBox2}>
            <Text style={styles.textWhiteBox}>FOTO</Text>
            <Text style={styles.textWhiteBox}>NOME</Text>
            <Text style={styles.textWhiteBox}>SETA</Text>
        </View>
        <View style={styles.witheBox2}>
            <Text style={styles.textWhiteBox}>FOTO</Text>
            <Text style={styles.textWhiteBox}>NOME</Text>
            <Text style={styles.textWhiteBox}>SETA</Text>
        </View>
        <View style={styles.witheBox2}>
            <Text style={styles.textWhiteBox}>FOTO</Text>
            <Text style={styles.textWhiteBox}>NOME</Text>
            <Text style={styles.textWhiteBox}>SETA</Text>
        </View>
        <View style={styles.witheBox2}>
            <Text style={styles.textWhiteBox}>FOTO</Text>
            <Text style={styles.textWhiteBox}>NOME</Text>
            <Text style={styles.textWhiteBox}>SETA</Text>
        </View>
        <View style={styles.witheBox2}>
            <Text style={styles.textWhiteBox}>FOTO</Text>
            <Text style={styles.textWhiteBox}>NOME</Text>
            <Text style={styles.textWhiteBox}>SETA</Text>
        </View>
        <View style={styles.witheBox2}>
            <Text style={styles.textWhiteBox}>FOTO</Text>
            <Text style={styles.textWhiteBox}>NOME</Text>
            <Text style={styles.textWhiteBox}>SETA</Text>
        </View>
        <View style={styles.witheBox2}>
            <Text style={styles.textWhiteBox}>FOTO</Text>
            <Text style={styles.textWhiteBox}>NOME</Text>
            <Text style={styles.textWhiteBox}>SETA</Text>
        </View>
        <View style={styles.witheBox2}>
            <Text style={styles.textWhiteBox}>FOTO</Text>
            <Text style={styles.textWhiteBox}>NOME</Text>
            <Text style={styles.textWhiteBox}>SETA</Text>
        </View>
        <View style={styles.witheBox2}>
            <Text style={styles.textWhiteBox}>FOTO</Text>
            <Text style={styles.textWhiteBox}>NOME</Text>
            <Text style={styles.textWhiteBox}>SETA</Text>
        </View>
        <View style={styles.witheBox2}>
            <Text style={styles.textWhiteBox}>FOTO</Text>
            <Text style={styles.textWhiteBox}>NOME</Text>
            <Text style={styles.textWhiteBox}>SETA</Text>
        </View>
        </View>
    );
};


export default WhiteBox;
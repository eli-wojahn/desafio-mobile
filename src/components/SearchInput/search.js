import React, { useState, useEffect } from 'react';
import { View, Image, TextInput } from 'react-native';
import styles from './styles';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';

const Search = () => {
    const [searchText, setSearchText] = useState('');


    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputBoxFora}>
            <TextInput
            style={styles.textoInput}
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
                placeholder='Pesquisar' 
                />
            <Image
                source={require('../../assets/search.png')}
                style={styles.serchIcon}
            />
            </View>
        </View>
    );
};


export default Search;
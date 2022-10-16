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
            <TextInput
                style={styles.inputBox}
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
                placeholder='Pesquisar                                                      🔍' />
        </View>
    );
};


export default Search;
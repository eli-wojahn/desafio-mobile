import React, { useState, useEffect } from 'react';
import { View, Text, Flatlist } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';

import styles from './styles';

const FlatList = () => {
    // const [employees, setEmployees] = useState([])

    // useEffect(() => {
    //   api.get("/employees").then((response) => {
    //     console.log(response.data);
    //     setEmployees(response.data)
    //   })
    // }, []);


    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View>
            {/* <FlatList
                data={employees}
                keyExtractor={pokemon => pokemon.name}
                renderItem={showEmployee}
            /> */}
        </View>
    );
};


export default FlatList;
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';

import styles from './styles';
import api from '../../services/api';

const Flatlist = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const response = await api.get("/employees").then((response) => {
            // console.log(response.data);
            setEmployees(response.data);})
        }
        fetchData();
      }, []); 

    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View>
            <FlatList
                data={employees}
                keyExtractor={element => element.name}
                ItemSeparatorComponent={itemSeparator}
                renderItem={showEmployee}
            />
        </View>
    );
};


function showEmployee(item) {
    const { name, job, admission_date, image } = item.item;

    return (
        <View >
            <TouchableOpacity>
                <View style={styles.witheBox2}>
                    <Image
                        source={{ uri: image }}
                        style={{ width: 34, height: 34, borderRadius: 32, margin: 10 }}
                    />
                    <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16 }}>{name}</Text>
                    <Image
                        source={(require('../../assets/chevron-down.png'))}
                        style={{ width: 34, height: 34, margin: 10 }}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const itemSeparator = () => {
    return <View style={styles.separator}></View>
}


export default Flatlist;


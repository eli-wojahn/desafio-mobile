import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


import Header from './src/components/Header/header';
import Title from './src/components/Title/title';
import Search from './src/components/SearchInput/search';
import BlueBox from './src/components/BlueBox/blueBox';
import WhiteBox from './src/components/FlatList/whiteBox';

export default function App() {

  return (
    <View style={styles.container}>
      <Header/>
      <Title/>
      <Search/>
      <BlueBox/>
      <WhiteBox/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
  },
  container2: {
    alignItems: 'center'
  },
});

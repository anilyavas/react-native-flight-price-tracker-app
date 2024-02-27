import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import SearchForm from './components/SearchForm';
import FlightOptionItem from './components/FlightOptionItem';
import { LinearGradient } from 'expo-linear-gradient';
import dummyData from './assets/data/data.json';
import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState('');

  const onSearch = async (data) => {
    setItems(dummyData);
  };
  return (
    <LinearGradient colors={['white', '#E0EFFF']} style={styles.container}>
      <SafeAreaView>
        <SearchForm onSearch={onSearch} />
        <FlatList
          data={items}
          renderItem={({ item }) => <FlightOptionItem flight={item} />}
          showsVerticalScrollIndicator={false}
        />
        <StatusBar style='auto' />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

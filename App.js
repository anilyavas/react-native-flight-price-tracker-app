import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import SearchForm from './components/SearchForm';
import FlightOptionItem from './components/FlightOptionItem';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { searchFlights } from './services/api';

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = async (data) => {
    setLoading(true);
    setItems([]);
    const response = await searchFlights(data);
    setItems(response.data);
    setLoading(false);
  };
  return (
    <LinearGradient colors={['white', '#E0EFFF']} style={styles.container}>
      <SafeAreaView>
        <SearchForm onSearch={onSearch} />
        {loading && (
          <View>
            <ActivityIndicator />
            <Text>Searching for the best prices</Text>
          </View>
        )}
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

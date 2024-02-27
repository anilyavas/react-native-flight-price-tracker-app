import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import SearchForm from './components/SearchForm';
import FlightOptionItem from './components/FlightOptionItem';
import { LinearGradient } from 'expo-linear-gradient';
import data from './assets/data/data.json';

const onSearch = async (data) => {
  console.log(data);
};
export default function App() {
  return (
    <LinearGradient colors={['white', '#E0EFFF']} style={styles.container}>
      <SafeAreaView>
        <SearchForm onSearch={onSearch} />
        <FlatList
          data={data}
          renderItem={(item) => <FlightOptionItem flight={item.item} />}
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

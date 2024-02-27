import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import SearchForm from './components/SearchForm';

const onSearch = async (data) => {
  console.log(data);
};
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchForm onSearch={onSearch} />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

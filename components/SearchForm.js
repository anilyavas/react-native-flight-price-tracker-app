import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';

const SearchForm = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Search the best prices for your next trip!
      </Text>
      <View style={styles.card}>
        <TextInput placeholder='TFS' />
      </View>
      <View style={styles.card}>
        <TextInput placeholder='MAD' />
      </View>
    </SafeAreaView>
  );
};

export default SearchForm;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'gainsboro',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    padding: 10,
  },
  card: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 10,
  },
});

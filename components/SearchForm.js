import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';

const SearchForm = ({ onSearch }) => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const onSearchPress = async () => {
    onSearch({ from, to });
  };
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Search the best prices for your next trip!
      </Text>
      <TextInput
        placeholder='From'
        value={from}
        onChangeText={setFrom}
        style={styles.input}
      />
      <TextInput
        placeholder='To'
        value={to}
        onChangeText={setTo}
        style={styles.input}
      />
      <View style={styles.datePicker}>
        <Feather name='calendar' size={26} color='gray' />
        <DateTimePicker
          value={departDate}
          minimumDate={new Date()}
          onChange={(event, date) => setDepartDate(date || new Date())}
        />
        <Text style={{ marginLeft: 10, color: 'gainsboro', fontSize: 20 }}>
          |
        </Text>
        <DateTimePicker
          value={returnDate}
          minimumDate={departDate}
          onChange={(event, date) => setReturnDate(date || new Date())}
        />
      </View>
      <Button title='Search' onPress={onSearchPress} />
    </View>
  );
};

export default SearchForm;
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    margin: 10,

    // shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginVertical: 5,
    padding: 10,
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginVertical: 5,
    padding: 5,
  },
});

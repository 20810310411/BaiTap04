import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.h1} >Square 1</Text>
      <Text style = {styles.h2} >Square 2</Text>
      <Text style = {styles.h3} >Square 3</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  h1: {
    height: 100,
    width: 100,
    backgroundColor: 'yellow',
    textAlign: 'center',
    paddingTop: 40,
    fontWeight: '800',
  },
  h2: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    textAlign: 'center',
    paddingTop: 40,
    fontWeight: '800',
  },
  h3: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    textAlign: 'center',
    paddingTop: 40,
    fontWeight: '800',
  },
});

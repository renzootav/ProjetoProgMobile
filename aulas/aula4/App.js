// Juntando tudo e testando

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aplicativo de Login!</Text>
      <TextInput style={styles.input} keyboardType='numeric' />
      <Button title='Login' onPress={() => alert('Ok')} />
      <Text style={styles.esquecisenha}>Esqueci minha senha</Text>
      <Button title='Entrar com Facebook' onPress={() => alert('Entrando com facebook')} />
      <Button title='Entrar com Google' onPress={() => alert('Entrando com google')} />
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
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  esquecisenha: {
    textDecorationLine: 'underline',
  },
});

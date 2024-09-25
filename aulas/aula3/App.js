import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ViewExemplo = () => {
  return (
    <View style={{flexDirection: "row", height: 100, padding: 20}}>
      <View style={{backgroundColor: "pink", flex: 0.5}} />
      <Text>Olá, mundo!</Text>
    </View>
  );
};
export default ViewExemplo;

const TextoAninhado = () => {
  const [setTitulo, titulo] = useState("Texto do elemento filho");
  const modificaTexto = () => {
    setTitulo("Esse texto está sendo exibido pois o primeiro elemento foi pressionado/tocado");
  };
  return(
    <Text style={styles.baseText}>
      <Text style={styles.titulo} onPress={modificaTexto}>
        {titulo}
        {"\n"}
        {"\n"}
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Verdana",
    marginTop: 50,
    marginlLeft: 10
  },
  titulo: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold"
  },
});

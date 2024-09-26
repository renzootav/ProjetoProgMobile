import * as React from 'react';
import { View, Text, Button } from 'react-native';
function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
      }}>
      <Text>Home Screen</Text>
      <Button
        title="Ir para About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}
export default HomeScreen;

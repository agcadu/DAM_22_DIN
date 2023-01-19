import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CalculadoraIMC} from './components/CalculadoraIMC';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'column',
            padding: 3,
            backgroundColor: '#6a1b9a',
          }}>
          <Text style={{color: 'red', fontSize: 30, textAlign: 'center'}}>
            Calculadora IMC
          </Text>
        </View>
        <View style={styles.calculadoraContainer}>
          <CalculadoraIMC />
        </View>
        <View style={styles.nombreAlumno}>
          <Text style={[{fontSize: 40}, styles.nombreAlumno]}>
            Created for Agustin Casañ
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  calculadoraContainer: {
    flex: 2,
  },
  nombreAlumno: {
    flex: 0.4,
    fontSize: 18,
    color: 'grey',
    flexDirection: 'column',
    padding: 3,
    backgroundColor: '#6a1b9a',
  },
});

export default App;

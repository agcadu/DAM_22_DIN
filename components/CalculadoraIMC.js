import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

export class CalculadoraIMC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura: '',
      info: '',
      resultado: '',
      colorText: '',
    };
    this.calculaIMC = this.calculaIMC.bind(this);
  }

  calculaIMC() {
    let imc = this.state.peso / (this.state.altura * this.state.altura);
    let s = this.state;
    s.resultado = imc;

    if (s.resultado < 18.5) {
      s.info = 'Peso insuficiente';
    } else if (s.resultado <= 24.9) {
      s.info = 'Normopeso';
    } else if (s.resultado <= 26.9) {
      s.info = 'Sobrepeso grado 1';
    } else if (s.resultado <= 29.9) {
      s.info = 'Sobrepeso grado 2(preobesidad)';
    } else if (s.resultado <= 34.9) {
      s.info = 'Obesidad de tipo 1';
    } else if (s.resultado <= 39.9) {
      s.info = 'Obesidad de tipo 2';
    } else if (s.resultado <= 49.9) {
      s.info = 'Obesidad de tipo 3(morbida)';
    } else if (s.resultado <= 50) {
      s.info = 'Obesidad de tipo 4(extrema)';
    }
    this.setState(s);
    if (imc < 27) {
      colorText = 'green';
    } else if (imc >= 27 && imc <= 39.9) {
      colorText = 'orange';
    } else {
      colorText = 'red';
    }
    this.setState({color: colorText});
  }

  render() {
    return (
      <View
        style={{
          flex: 0.7,
          flexDirection: 'column',
          backgroundColor: 'white',
          padding: 10,
          margin: 5,
        }}>
        <Text style={{color: 'red', margin: 2, fontSize: 30}}>Datos</Text>
        <Text style={{color: 'blue', fontWeight: 'bold', padding: 3}}>
          PESO
        </Text>
        <TextInput
          onChangeText={peso => this.setState({peso})}
          value={this.state.peso}
          placeholder="Peso en kg"
          keyboardType="numeric"
          underlineColorAndroid="black"></TextInput>
        <Text style={{color: 'blue', fontWeight: 'bold', padding: 3}}>
          ALTURA
        </Text>
        <TextInput
          onChangeText={altura => this.setState({altura})}
          value={this.state.altura}
          placeholder="Altura en metros"
          keyboardType="numeric"
          underlineColorAndroid="black"></TextInput>
        <Button
          onPress={this.calculaIMC}
          title="Calcular IMC"
          color="blue"></Button>
        <Text style={{color: 'black', padding: 5}}>Resultado</Text>
        <Text style={{color: this.state.color, fontWeight: 'bold', padding: 3}}>
          {this.state.info}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({});

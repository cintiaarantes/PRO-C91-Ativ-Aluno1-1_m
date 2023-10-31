//Aula 91: Construção da Tela de Meteoros

import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Alert, FlatList, Image, ImageBackground, Dimensions } from 'react-native';
import axios from 'axios';

export default class MeteorScreen extends Component {
  //Desafio 01: Configure o método constructor e this.state.meteors para armazenar os dados buscados da API
  

  //Desafio 05: Chame a função getMeteors
  componentDidMount() {
    
  }


  //Desafio 02: Preenche a função getMeteors, usando axios para buscar os dados da API da NASA.
  getMeteors = () => {
    axios
      .get(
        
      )
      .then((response) => {
        //Usando o método .then() para passar os dados obtidos:
        //Desafio 03: Armazene o response.data em this.state.meteors no formato JSON.
        
        //Desafio 04: Colete as chaves dos dados JSON na tela do console para executar e testar o código
        
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />
        <Text>Tela de Meteoros</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

import React, { Component } from 'react';
import { Picker, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { baixarAeroportos } from './selectF';


export default class App extends Component {
  state = {
    dados: [],
    select: 'Não'
  }

  componentDidMount() {
    return fetch('http://192.168.0.150/react/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ dados: responseJson });
        // alert(JSON.stringify(responseJson));
      })
      .catch((error) => {
        // alert(error);
      });
  }

  render() {

    return (
      <View style={styles.container}>
        {/* <Text>a²</Text>
        <FlatList
          data={this.state.dados}
          renderItem={({ item }) => <Text>{item.cidade}</Text>}
        /> */}
        <Picker
          style={{ height: 50, width: 300 }}
          selectedValue={this.state.select}
          onValueChange={(dadosValue, dadosIndex) => this.setState({ select: dadosValue })}>
          <Picker.Item label="SELECIONE UMA CIDADE" value="cidade" />
          {this.state.dados.map((item, key) => (
            <Picker.Item label={item.nome} value={item.nome} key={key} />)
          )}
        </Picker>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

import React, { Component } from 'react';
import { Picker, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { baixarAeroportos } from './selectF';
import StarRating from 'react-native-star-rating';

export default class App extends Component {
  state = {
    dados: [],
    select: 'Não',    
    starCount: 0
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

  teste(dadosValue, itemIndex){
    this.setState({ select: dadosValue }) 
    //alert(JSON.stringify(this.state.dados[categoria].categoria)) 
    star = parseInt(this.state.dados[itemIndex].categoria)
    this.setState({ starCount: star }) 
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
          onValueChange={(dadosValue, itemIndex) => this.teste(dadosValue, itemIndex)}> 
          {this.state.dados.map((item, key) => (
            <Picker.Item label={item.nome} value={item.nome} key={key} />)
          )}
        </Picker>
        <Text>Movimentação:</Text><StarRating
        disabled={true}
        maxStars={5}
        rating={this.state.starCount} 
      />
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

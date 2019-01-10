import React, { Component } from 'react';
import { Picker, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { baixarAeroportos } from './selectF';
import StarRating from 'react-native-star-rating';
import { FormLabel, FormInput, Button } from 'react-native-elements'; 

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

        
<FormLabel labelStyle={styles.label}> Nome</FormLabel>
<FormInput inputStyle={styles.input}/> 

<FormLabel labelStyle={styles.label}> Código</FormLabel>
<FormInput inputStyle={styles.input}/> 
<FormLabel labelStyle={styles.label}> Aeroporto</FormLabel>
      <View style={styles.aero}>
        <Picker
          style={styles.picker}
          selectedValue={this.state.select}
          onValueChange={(dadosValue, itemIndex) => this.teste(dadosValue, itemIndex)}> 
          {this.state.dados.map((item, key) => (
            <Picker.Item label={item.nome} value={item.nome} key={key} />)
          )}
        </Picker>
      </View>
        
<FormLabel labelStyle={styles.label}> Movimentação</FormLabel>
      <View style={styles.star}>
      <StarRating 
        disabled={true}
        maxStars={5}
        rating={this.state.starCount} 
      />
      </View>
<FormLabel labelStyle={styles.label}> Slots </FormLabel>


<FormLabel labelStyle={styles.label}> Hubs</FormLabel>
<Button
  title='BUTTON' />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', 
    backgroundColor: '#ccc', 
  },
  label:{
    color: '#000',
    fontWeight: 'normal',
    fontSize: 16,
    paddingTop: 4
  },
  input:{
    borderBottomWidth: 1,
  },
  picker:{
    height: 40, 
    width: 350,
    color: '#000',
  },
  aero:{
    maxWidth: 100,
    marginLeft: 20,
    marginTop: 10
  },
  star:{ 
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20
  }
});

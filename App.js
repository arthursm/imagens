import React, { Component } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView, Picker, Image, StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, TextInput, Slider, DatePickerIOS, PickerIOS } from 'react-native';
import StarRating from 'react-native-star-rating';

export default class App extends Component {
  state = {
    dados: [],
    select: '',
    starCount: 2,
    slots: '0%',
    gainSlot: 100,
    nome: '',
    codigo: '',
    aeroporto: '',
    iata: 'AUH',
    ver: ''
  }

  componentDidMount() {

    return fetch('http://192.168.10.96/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ dados: responseJson });
        // alert(JSON.stringify(responseJson));
      })
      .catch((error) => {
        alert(error);
      });
  }
  enviarDados(nome, codigo, slot, iata, ver) {

    if (nome == ver || codigo == ver || iata == ver) {
      alert('Preencha todos os campos')
    } else {
      fetch("http://192.168.10.96/teste.php", {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({ nome: nome, codigo: codigo, slot: slot, iata: iata })
      })
        .then((response) => response.text())
        .then((responseText) => {
          alert(responseText);
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  teste(dadosValue, itemIndex) {
    this.setState({ select: dadosValue })
    this.setState({ iata: this.state.dados[itemIndex].iata })
    //alert(JSON.stringify(this.state.dados[categoria].categoria)) 
    star = parseInt(this.state.dados[itemIndex].categoria)
    this.setState({ starCount: star })
    // alert(this.state.dados[itemIndex].iata)
  }
  render() {

    return (
      <View style={styles.conteudo}>
        <Image
          style={{ width: wp('100%'), height: hp('20%') }}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQnuLZYjPtYN5nj2yiQDZ0XuOJUPQD7qLDdvl-MdIj7jdnCEX' }}
        />
        <View style={styles.container}>
          <ScrollView>
            {/* <Text>a²</Text>
        <FlatList
          data={this.state.dados}
          renderItem={({ item }) => <Text>{item.cidade}</Text>}
        /> */}
            <View style={styles.direcao}>
              <Text style={styles.label}> Nome: </Text>
              <TextInput style={styles.input} underlineColorAndroid="transparent" onChangeText={(nome) => this.setState({ nome })} value={this.state.nome} />
            </View>
            <View style={styles.direcao}>
              <Text style={styles.label}> Código: </Text>
              <TextInput style={styles.input2} autoCapitalize="characters" maxLength={3} underlineColorAndroid="transparent" onChangeText={(codigo) => this.setState({ codigo })} value={this.state.codigo} />
            </View>
            <View style={styles.direcao}>
              <Text style={styles.label2}> Aeroporto: </Text>
              <View style={styles.aero}>
                <Picker
                  style={styles.picker}
                  selectedValue={this.state.select}
                  onValueChange={(dadosValue, itemIndex) => this.teste(dadosValue, itemIndex)}>
                  {this.state.dados.map((item, key) => (
                    <Picker.Item label={item.nome} value={item.iata} key={key} />)
                  )}
                </Picker>
              </View>
            </View>
            <View style={styles.direcao}>
              <Text style={styles.label} > Movimentação</Text>
              <View style={styles.star}>
                <StarRating style={styles.star}
                  buttonStyle={styles.staring}
                  disabled={true}
                  maxStars={5}
                  rating={this.state.starCount}
                  starSize={30}
                />
              </View>
            </View>
            <View style={styles.direcao}>
              <Text style={styles.label}> Slots: </Text>
              <TextInput style={styles.input3} editable={false} value={this.state.slots} underlineColorAndroid="transparent" />
            </View>
            <View style={styles.botao}>
              <Button
                title='PRONTO'
                color='#353b48'
                onPress={() => this.enviarDados(this.state.nome, this.state.codigo, this.state.gainSlot, this.state.iata, this.state.ver)} />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    backgroundColor: '#fff',

  },
  container: {
    maxHeight: hp('65%'),
    width: wp('80%'),
    marginLeft: wp('10%'),
    marginTop: hp('10%'),
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  inputsd: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ccc',
  },
  label: {
    color: '#000',
    fontWeight: 'normal',
    fontSize: 16,
    paddingTop: hp('2%'),
  },
  label2: {
    color: '#000',
    fontWeight: 'normal',
    fontSize: 16,
    paddingTop: hp('2.5%'),
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    width: wp('70%'),
    marginLeft: hp('1%'),
    marginTop: hp('1%')
  },
  input2: {
    borderBottomWidth: 1,
    height: 40,
    width: wp('70%'),
    marginTop: hp('1%')
  },
  input3: {
    height: 40,
    marginTop: hp('0.8%'),
    color: '#000'
  },
  picker: {
    height: 40,
    marginTop: hp('-0.5%'),
    marginLeft: hp('-4%'),
    width: wp('64%'),
    borderColor: '#000',
    borderWidth: 1,
    color: '#000',
  },
  aero: {
    maxWidth: 100,
    marginLeft: 20,
    marginTop: 10
  },
  star: {
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
    width: 120,
  },
  staring: {
    height: 30,
  },
  direcao: {
    flex: 1,
    flexDirection: 'row',
  },
  botao: {
    marginTop: hp('5%'),
    maxWidth: wp('40%'),
    marginLeft: wp('20%')
  }
});

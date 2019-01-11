import React, { Component } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {FlatList, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, View, ScrollView, Picker, ImageBackground, Button, TextInput, Slider, DatePickerIOS, PickerIOS } from 'react-native';
import StarRating from 'react-native-star-rating';
import { Url } from '../services/apiF';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
 
export default class Home extends Component {
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
    ver: '',
    text: ''
  }
  _menu = null;
  _menu2 = null;
  _menu3 = null;
  _menu4 = null; 
 
setMenuRef=ref=>{this._menu = ref};hideMenu=()=>{this._menu.hide()};showMenu=()=>{this._menu.show()};
setMenuRef2=ref2=>{this._menu2 = ref2};hideMenu2=()=>{this._menu2.hide()};showMenu2=()=>{this._menu2.show()};
setMenuRef3=ref3=>{this._menu3 = ref3};hideMenu3=()=>{this._menu3.hide()};showMenu3=()=>{this._menu3.show()};
setMenuRef4=ref4=>{this._menu4 = ref4};hideMenu4=()=>{this._menu4.hide()};showMenu4=()=>{this._menu4.show()};
   
  componentDidMount() {

    return fetch(Url + "index.php")
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
      fetch(Url + "teste.php", {
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

  retornaValores(dadosValue, itemIndex) {
    this.setState({ select: dadosValue })
    this.setState({ iata: this.state.dados[itemIndex].iata })
    //alert(JSON.stringify(this.state.dados[categoria].categoria)) 
    star = parseInt(this.state.dados[itemIndex].categoria)
    this.setState({ starCount: star })
    // alert(this.state.dados[itemIndex].iata)
  }
  render() {
    var data = [["C", "Java", "JavaScript", "PHP"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
    
    return (
      <View style={styles.container}>  
      <ScrollView showsVerticalScrollIndicator={false}>  
        <SafeAreaView>          
        <View style={styles.viewMenu}>
        <TouchableOpacity  onPress={this.showMenu} style={styles.menu}> 
        <Menu ref={this.setMenuRef} button={<Text style={styles.texto}>Empresa</Text>}>
          <MenuItem onPress={this.hideMenu}>Visão Geral</MenuItem>
          <MenuItem onPress={this.hideMenu}>Configurações</MenuItem>
          <MenuItem onPress={this.hideMenu} disabled> Criar subsidiaria </MenuItem>
        </Menu> 
        </TouchableOpacity>
      
        <TouchableOpacity  onPress={this.showMenu2} style={styles.menu}> 
        <Menu ref={this.setMenuRef2} button={<Text style={styles.texto}>Comercial</Text>}>
          <MenuItem onPress={this.hideMenu2}>Numero de Voos</MenuItem>
          <MenuItem onPress={this.hideMenu2}>Avaliação de rota</MenuItem>  
          <MenuItem onPress={this.hideMenu2}>Monitoramento</MenuItem>
          <MenuItem onPress={this.hideMenu2}>Cabine</MenuItem>
          <MenuItem onPress={this.hideMenu2}>Interline</MenuItem>
          <MenuItem onPress={this.hideMenu2}>Aliança</MenuItem>
        </Menu>
        </TouchableOpacity> 


        <TouchableOpacity  onPress={this.showMenu3} style={styles.menu}>       
        <Menu ref={this.setMenuRef3} button={<Text style={styles.texto}>Operações</Text>}>
          <MenuItem onPress={this.hideMenu3}>Administração de Frota</MenuItem>
          <MenuItem onPress={this.hideMenu3}>Manutenção</MenuItem>
          <MenuItem onPress={this.hideMenu3}>Estações</MenuItem> 
          <MenuItem onPress={this.hideMenu3}>Aeroportos</MenuItem> 
        </Menu>
        </TouchableOpacity> 


        <TouchableOpacity  onPress={this.showMenu4} style={styles.menu}>       
        <Menu
          ref={this.setMenuRef4} button={<Text style={styles.texto}>Administração</Text>}
        >
          <MenuItem onPress={this.hideMenu4}>Fabricantes</MenuItem>
          <MenuItem onPress={this.hideMenu4}>Recursos Humanos</MenuItem>
          <MenuItem onPress={this.hideMenu4}>Finanças</MenuItem>
          <MenuItem onPress={this.hideMenu4}>Alugueis</MenuItem>  
        </Menu>
        </TouchableOpacity> 
 

        <View style={styles.money}> 
        <TouchableOpacity onPress={this.showMenu} style={styles.menu}>          
        <Text style={styles.texto}> A$  124.124.324.234</Text>
        </TouchableOpacity>
        </View>
      </View>

      <Image
          style={styles.aircraft}
          source={{uri: 'https://xiguan.airlinesim.aero/assets/img/acprofiles/BOCS100_RP.jpg'}}
        />
      </SafeAreaView>
      </ScrollView> 
      </View>
    );
  }
} 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#fff', 
  }, 
  money:{  
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',  
    marginRight: 20,
  },  
  text: {
    color: "#333333",
    fontSize: 16,
    paddingTop: 5,
    paddingLeft: 5    
  }, 
  viewMenu:{ 
    flex: 1, 
    flexDirection:'row', 
    alignItems: 'center',  
    borderWidth: 1,
    backgroundColor:'#192a56',  
   },
   menu:{
     backgroundColor:'#192a56',
     color: '#FFF',
     paddingTop: 15,  
     paddingBottom: 15,  
     paddingLeft: 10,
   },
   texto:{
    color: '#FFF',
    fontWeight: 'normal'
   },
   icon:{
    marginTop: 50,
    color: 'red'
   },
   aircraft:{
    width: 600, 
    height: 200
   }

});

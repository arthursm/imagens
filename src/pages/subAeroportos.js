import React, { Component } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FlatList, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, View, ScrollView, Picker, ImageBackground, Button, TextInput, Slider, DatePickerIOS, PickerIOS } from 'react-native';
import StarRating from 'react-native-star-rating';
import { Url } from '../services/apiF';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Table, Col, Cols, Cell, TableWrapper, Row, Rows } from 'react-native-table-component';
import { styles } from './styles/subFabricante.css';    

export default class SubAeroportos extends Component {
    state = {
        dados: [], 
        id: 0,
        continente: 4,
        select: '',
        starCount: 2,
        slots: '0%',
        gainSlot: 100,
        nome: '',
        codigo: '',
        aeroporto: '',
        iata: 'AUH',
        ver: '',
        text: '',
        tableHead: ['Cidade','Código','M', 'Slots', 'Ação'],
        widthArr: [wp('50%'), wp('15%'), wp('6%'), wp('18%'), wp('10.9%'),]
    }
    _menu = null;
    _menu2 = null;
    _menu3 = null;
    _menu4 = null;

    setMenuRef = ref => { this._menu = ref }; hideMenu = () => { this._menu.hide() }; showMenu = () => { this._menu.show() };
    setMenuRef2 = ref2 => { this._menu2 = ref2 }; hideMenu2 = () => { this._menu2.hide() }; showMenu2 = () => { this._menu2.show() };
    setMenuRef3 = ref3 => { this._menu3 = ref3 }; hideMenu3 = () => { this._menu3.hide() }; showMenu3 = () => { this._menu3.show() };
    setMenuRef4 = ref4 => { this._menu4 = ref4 }; hideMenu4 = () => { this._menu4.hide() }; showMenu4 = () => { this._menu4.show() };

    componentDidMount() { 
        const { itemPais } = this.props.navigation.state.params
        
        fetch(Url + "aeroportos.php", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({ cont: itemPais })
        })
            .then((response) => response.json())
            .then((responseJson) => { 
                // alert(JSON.stringify(responseJson))
                this.setState({ dados: responseJson });
            })
            .catch((error) => {
                alert(error);
            });
    }   
    render() { 
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SafeAreaView>
                        <View style={styles.viewMenu}>
                            <TouchableOpacity onPress={this.showMenu} style={styles.menu}>
                                <Menu ref={this.setMenuRef} button={<Text style={styles.texto}>Empresa</Text>}>
                                    <MenuItem onPress={this.hideMenu}>Visão Geral</MenuItem>
                                    <MenuItem onPress={this.hideMenu}>Configurações</MenuItem>
                                    <MenuItem onPress={this.hideMenu} disabled> Criar subsidiaria </MenuItem>
                                </Menu>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.showMenu2} style={styles.menu}>
                                <Menu ref={this.setMenuRef2} button={<Text style={styles.texto}>Comercial</Text>}>
                                    <MenuItem onPress={this.hideMenu2}>Numero de Voos</MenuItem>
                                    <MenuItem onPress={this.hideMenu2} disabled>Avaliação de rota</MenuItem>
                                    <MenuItem onPress={this.hideMenu2}>Monitoramento</MenuItem>
                                    <MenuItem onPress={this.hideMenu2}>Cabine</MenuItem>
                                    <MenuItem onPress={this.hideMenu2} disabled>Interline</MenuItem>
                                    <MenuItem onPress={this.hideMenu2} disabled>Aliança</MenuItem>
                                </Menu>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={this.showMenu3} style={styles.menu}>
                                <Menu ref={this.setMenuRef3} button={<Text style={styles.texto}>Operações</Text>}>
                                    <MenuItem onPress={this.hideMenu3}>Administração de Frota</MenuItem>
                                    <MenuItem onPress={this.hideMenu3}>Manutenção</MenuItem>
                                    <MenuItem onPress={this.hideMenu3}>Estações</MenuItem>
                                    <MenuItem onPress={this.hideMenu3}>Aeroportos</MenuItem>
                                </Menu>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={this.showMenu4} style={styles.menu}>
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
                         
 

                        <View>
                            <Table borderStyle={{ borderColor: '#fff' }}>
                                <Row  widthArr={this.state.widthArr} data={this.state.tableHead} style={styles.header} textStyle={styles.textHeader} />
                            </Table>
                            <Table borderStyle={{ borderWidth: 2, borderColor: '#C1C0B9' }}>
                                {this.state.dados.map((rowData, index) => (
                                    <Row widthArr={this.state.widthArr} key={index} data={[this.state.dados[index].cidade, this.state.dados[index].iata, this.state.dados[index].categoria, this.state.dados[index].slots]} style={styles.head} textStyle={styles.text} />))
                                }
                            </Table>
                        </View>  
                    </SafeAreaView>
                </ScrollView>
            </View>
        );
    }
}

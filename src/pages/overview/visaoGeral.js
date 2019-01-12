import React, { Component } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FlatList, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, View, ScrollView, Picker, ImageBackground, Button, TextInput, Slider, DatePickerIOS, PickerIOS } from 'react-native';
import StarRating from 'react-native-star-rating';
import { Url } from '../../services/apiF';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Table, Col, Cols, Cell, TableWrapper, Row, Rows } from 'react-native-table-component';
import { styles } from '../styles/subFabricante.css'; 

export default class VisaoGeral extends Component {
    state = {
        dados: [
            {"nome":"Teste Airline", "iata":"TSA", "hub": "Grua", "pais":"Brasil", "avioes":"12", "empregados": "410"},
            {"nome":"Teste Airline", "iata":"TSA", "hub": "Grua", "pais":"Brasil", "avioes":"12", "empregados": "410"},
            {"nome":"Teste Airline", "iata":"TSA", "hub": "Grua", "pais":"Brasil", "avioes":"12", "empregados": "410"},
            {"nome":"Teste Airline", "iata":"TSA", "hub": "Grua", "pais":"Brasil", "avioes":"12", "empregados": "410"},
            {"nome":"Teste Airline", "iata":"TSA", "hub": "Grua", "pais":"Brasil", "avioes":"12", "empregados": "410"},
            {"nome":"Teste Airline", "iata":"TSA", "hub": "Grua", "pais":"Brasil", "avioes":"12", "empregados": "410"},
        ], 
        tabela:[            
        ['Nome', 'Teste Airline'],
        ['Codigo', 'TSA'],
        ['Fundação', '01/12/2018'],
        ['Hub', 'São Paulo - GRU'],
        ['País', 'Brasil'],
        ['Aliança', 'Skyaly'],
        ['Holding', 'Brasil Teste'], 
        ['Empregados', '410'], 
        ],
         
        tabela2:[            
            ['Aluguel','12:53', 'A$ 124.142'],
            ['Aluguel','12:53', 'A$ 425.142'],
            ['Empréstimo', '12:53', 'A$ 241.241'],
            ['Aluguel','12:53', 'A$ 241.241'], 
            ['Balanço semanal', '12:53', 'A$ 241.241'], 
            ['Aluguel','12:53', 'A$ 241.241'],
            ['Aluguel','12:53', 'A$ 241.241'],
            ['Aluguel','12:53', 'A$ 241.241'],
            ['Aluguel','12:53', 'A$ 241.241'],
            ['Aluguel','12:53', 'A$ 241.241'],
            ['Aluguel','12:53', 'A$ 241.241'],

            ],
            
        tabela3:[            
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'],
            ['01/02','AQUI FICA O EVENTO BEM GRANDE'], 
            ],
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
        tableHead: ['Informações'],
        tableHead2: ['Despesas de hoje'],
        tableHead3: ['Despesa','Hora', 'A$'],
        tableHead4: ['Despesas de amanhã'],
        tableHead5: ['Histórico'],
        widthArr: [wp('50%'), wp('15%'), wp('6%'), wp('18%'), wp('10.9%'),],
        widthTab: [wp('18%'), wp('36%')],
        widthTab2: [wp('21%'),wp('7%'),wp('15%')],
        widthTab3: [wp('7%'), wp('47%')],
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
        return fetch(Url + "paises.php")
        .then((response) => response.json())
        .then((responseJson) => {  
            this.setState({ paises: responseJson });  
        })
        .catch((error) => {
            // alert(error);
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
    paisSelecionado(valor){  
        if(valor != undefined){ 
            this.setState({ select: valor }) 
            this.props.navigation.navigate("SubAeroportos", { itemPais: valor });
        }else{  

        }
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

             
                        <View style={{ marginLeft: wp('0.5%'), width:wp('99%'), flexDirection:'row', flex:1, justifyContent:"space-between"}}> 
                            <View>
                            <Table style={{width: wp('54.5%')}}  borderStyle={{ borderColor: '#fff' }}>
                                <Row data={this.state.tableHead} style={styles.header} textStyle={styles.textHeader} />
                            </Table>
                            <Table style={{width: wp('54%')}} borderStyle={{ borderWidth: 2, borderColor: '#C1C0B9' }}> 
                                <Rows widthArr={this.state.widthTab} data={this.state.tabela} textStyle={styles.text}/>
                            </Table>
                            
                            <Table style={{ marginTop: wp('2%'), width: wp('54.5%')}}  borderStyle={{ borderColor: '#fff' }}>
                                <Row data={this.state.tableHead5} style={styles.header} textStyle={styles.textHeader} />
                            </Table>
                            <Table style={{ width: wp('54%')}} borderStyle={{ borderWidth: 2, borderColor: '#C1C0B9' }}> 
                                <Rows widthArr={this.state.widthTab3} data={this.state.tabela3} textStyle={styles.text}/>
                            </Table>
                            </View>
                            <View>
                            <Table style={{width: wp('43.5%')}}  borderStyle={{ borderColor: '#fff' }}>
                                <Row data={this.state.tableHead2} style={styles.header} textStyle={styles.textHeader} />
                            </Table>
                            <Table style={{width: wp('43.5%')}}  borderStyle={{  borderWidth: 2, borderColor: '#C1C0B9' }}>
                                <Row widthArr={this.state.widthTab2} data={this.state.tableHead3} style={styles.header2} textStyle={styles.textHeader} />
                            </Table>
                            <Table style={{width: wp('43%')}} borderStyle={{ borderWidth: 2, borderColor: '#C1C0B9' }}> 
                                <Rows widthArr={this.state.widthTab2} data={this.state.tabela2} textStyle={styles.text}/>
                            </Table>
                            <Table style={{width: wp('43.5%')}}  borderStyle={{ borderColor: '#fff' }}>
                                <Row data={this.state.tableHead4} style={styles.header} textStyle={styles.textHeader} />
                            </Table>
                            <Table style={{width: wp('43.5%')}}  borderStyle={{ borderWidth: 2, borderColor: '#C1C0B9' }}>
                                <Row widthArr={this.state.widthTab2} data={this.state.tableHead3} style={styles.header2} textStyle={styles.textHeader} />
                            </Table>
                            <Table style={{width: wp('43%')}} borderStyle={{ borderWidth: 2, borderColor: '#C1C0B9' }}> 
                                <Rows widthArr={this.state.widthTab2} data={this.state.tabela2} textStyle={styles.text}/>
                            </Table>
                            </View>
                             
                        </View>  
                    </SafeAreaView>
                </ScrollView>
            </View>
        );
    }
}

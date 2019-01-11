import React, { Component } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FlatList, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, View, ScrollView, Picker, ImageBackground, Button, TextInput, Slider, DatePickerIOS, PickerIOS } from 'react-native';
import StarRating from 'react-native-star-rating';
import { Url } from '../services/apiF';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Table, Col, Cols, Cell, TableWrapper, Row } from 'react-native-table-component';
import { styles } from './styles/frpta.css';

export default class Frota extends Component {
    state = {
        dados: [
            { "title": "Comprar a aeronave do modo padrão", "id": "0" },
            { "title": "Comprar a aeronave por emprestimo", "id": "1" },
            { "title": "Alugar a aeronave por tempo indeterminado", "id": "2" }
        ],
        id: 0,
        quantidade: 1,
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
        widthArr: [100, 100, 300],
        tableHead: ['Informações'],
        tableHead2: ['Principais Operadores'],
        tableHead3: ['Encomenda'],
        tableColumn: [['Preço'], ['Codigo'], ['Fabricante'], ['Produção'], ['Produzidos'], ['Popularidade'], ['Tripulação'], ['Passageiros'], ['Alcance'], ['Velocidade'], ['Pista Mínima']],
        tableOperadores: [['United America (11)'], ['LATAM Brasil (9)'], ['LATAM Chile (8)'], ['Avianca (7)'], ['Avianca Colombia (6)'], ['Avianca Colombia (6)'], ['Avianca Colombia (6)'], ['Avianca Colombia (6)'], ['Avianca Colombia (6)'], ['Outros (58)']],
        tableData: [['A$ 252.256.254'], ['A330'], ['Airbus'], ['1 / 25h'], ['235'], ['3.4'], ['2'], ['220'], ['4536 km'], ['890 km/h'], ['3356 m']]
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

        return fetch(Url + "index.php")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ dados: responseJson });
                // alert(JSON.stringify(responseJson));
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

    mudarTexto(num) {
        this.setState({ id: num })
        if (this.state.id == 0) {
            tt = 'AAaa';
        }
        if (this.state.id == 1) {
            tt = 'BBbb';
        }
        if (this.state.id == 2) {
            tt = 'CCcc';
        }

        alert(tt)
    }
    render() {
        const tableData = [];
        for (let i = 0; i < 11; i += 1) {
            const rowData = [];
            tableData.push(rowData);
        }

        const tableOperadores = [];
        for (let i = 0; i < 10; i += 1) {
            const rowData2 = [];
            tableOperadores.push(rowData2);
        }
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

                        <Image
                            style={styles.aircraft}
                            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/lustrequalquer.appspot.com/o/air%2F15.jpg?alt=media&token=a3e2be72-e1eb-45a3-9933-e1526b89c43b' }}
                        />
                        <View>
                            <Table borderStyle={{ borderColor: '#353b48' }}>
                                <Row data={this.state.tableHead} style={styles.header} textStyle={styles.textHeader} />
                            </Table>
                            <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                {
                                    tableData.map((rowData, index) => (
                                        <Row key={index} data={[this.state.tableColumn[index], this.state.tableData[index]]} style={styles.head} textStyle={styles.text} />
                                    ))
                                }
                            </Table>

                            <Table style={{ marginTop: 10 }} borderStyle={{ borderColor: '#353b48' }}>
                                <Row data={this.state.tableHead2} style={styles.header} textStyle={styles.textHeader} />
                            </Table>
                            <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                {
                                    tableOperadores.map((rowData2, index) => (
                                        <Row key={index} data={[this.state.tableOperadores[index]]} style={styles.head} textStyle={styles.text} />
                                    ))
                                }
                            </Table>

                            <Table style={{ marginTop: 10 }} borderStyle={{ borderColor: '#353b48' }}>
                                <Row data={this.state.tableHead3} style={styles.header} textStyle={styles.textHeader} />
                            </Table>
                            <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                                <Picker
                                    style={styles.picker}
                                    selectedValue={this.state.dados[this.state.id].title}
                                    onValueChange={(dadosValue) => this.mudarTexto(dadosValue)}>
                                    {this.state.dados.map((item, key) => (
                                        <Picker.Item label={item.title} value={item.id} key={key} />)
                                    )}
                                </Picker>

                                {
                                    tableOperadores.map((rowData2, index) => (
                                        <Row widthArr={this.state.widthArr} key={index} data={[this.state.tableOperadores[index]]} style={styles.head} textStyle={styles.text} />
                                    ))
                                }

                            </Table>
                        </View>

                    </SafeAreaView>
                </ScrollView>
            </View>
        );
    }
}

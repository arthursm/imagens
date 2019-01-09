import { AsyncStorage } from "react-native";

export const CHAVE_CLIENTE = "aero";

export const salvarDadosStorage = async (chave, valor) => {
    try {
        await AsyncStorage.setItem(chave, valor);
    } catch (error) {
        // alert(error);
    }
};

export const recuperarDadosStorage = async chave => {
    try {
        const value = await AsyncStorage.getItem(chave);
        // if (value !== null) {
        // alert(JSON.stringify(value))
        return value;
        // }
    } catch (error) {
        alert(error);
    }
};

export const alterarValorStorage = async (chave, novoValor) => {
    try {
        AsyncStorage.setItem(chave, novoValor);
    } catch (error) {
        // Como tratar isso?
    }
};

export const deletarStorage = async chave => {
    try {
        AsyncStorage.removeItem(chave);
    } catch (error) {
        // Como tratar isso?
    }
};

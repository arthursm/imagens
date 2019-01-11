import { ToastAndroid } from "react-native";
import {
    CHAVE_CLIENTE,
    salvarDadosStorage,
    recuperarDadosStorage
} from "./storageF";
import api from "./apiF";

export const baixarAeroportos = async () => {
    const response = await api.post("/index.php");

    try {
        salvarDadosStorage(CHAVE_CLIENTE, JSON.stringify(response.data));
    } catch (err) {
        ToastAndroid.showWithGravity(
            "Não foi possivel fazer o download dos clientes",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        );
    }
};


export const baixarAeroportosGet = async () => {
    const response = await api.get("/index.php");

    try {
        salvarDadosStorage(CHAVE_CLIENTE, JSON.stringify(response.data));
    } catch (err) {
        ToastAndroid.showWithGravity(
            "Não foi possivel fazer o download dos clientes",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        );
    }
};

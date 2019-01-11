import { createStackNavigator, DrawerNavigator } from "react-navigation"; 

import Cadastro from "./cadastro";
import Home from "./pages/home"; 

let titulo = "Informações";

export default createStackNavigator (
  {
    Home, 
    Cadastro,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#004f8b"
      },
      title: titulo,
      headerTintColor: "#FFF",
      header: null,
    }
  }


);
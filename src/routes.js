import { createStackNavigator, DrawerNavigator } from "react-navigation";

import Cadastro from "./cadastro";
import Home from "./pages/home";
import Fabricante from "./pages/fabricante"
import SubFabricante from "./pages/subFabricante";
import Aeroportos from "./pages/aeroportos";

let titulo = "Informações";

export default createStackNavigator(
  {
    Aeroportos,
    Fabricante,
    SubFabricante,
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
import { createStackNavigator, DrawerNavigator } from "react-navigation";

import Aeroportos from "./pages/aeroportos";
import SubAeroportos from "./pages/subAeroportos";
import Cadastro from "./cadastro";
import Home from "./pages/home";
import Fabricante from "./pages/fabricante"
import SubFabricante from "./pages/subFabricante";

let titulo = "Informações";

export default createStackNavigator(
  {
    Aeroportos,
    SubAeroportos,
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
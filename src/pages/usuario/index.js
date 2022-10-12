import React, { Component } from "react";
import Header from "../../components/usuario/header-usuario";
import Tabela from "../../components/usuario/tabela";
import Rodape from "../../components/home/rodape";
import Corpo from "../../components/usuario/corpo";

class Usuario extends Component {
  render() {
    return (
      <>
        <Header />
        <Corpo />
        <Tabela />
        <Rodape />
      </>
    );
  }
}

export default Usuario;

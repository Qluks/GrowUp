import React, { Component } from "react";
import LoginSair from "../../components/adm/popups";
import TabelaAdm from "../../components/adm/tabelaADM";
import Header from "../../components/home/header";
import Rodape from "../../components/home/rodape";

class Administrador extends Component {
    render() {
        return (
            <>
                <Header/><br/>
                <h1>Olá Administrador!</h1><br/>
                <TabelaAdm/>
                <LoginSair nomeAdm="João"/><br/>
                <Rodape/><br/>
            </>
        )
    }
}

export default Administrador;
import React, { Component } from "react";
import TabelaAdm from "../../components/adm/tabelaADM";
import Corpo from "../../components/adm/corpo";
import Header from "../../components/adm/header";
import Rodape from "../../components/home/rodape";

class Administrador extends Component {
    render() {
        return (
            <>
                <Header nomeADM="João"/><br/>
                <Corpo />
                <TabelaAdm/>
                <Rodape/>
            </>
        )
    }
}

export default Administrador;
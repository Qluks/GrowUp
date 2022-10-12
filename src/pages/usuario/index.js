import React, { Component } from "react";
import Tabela from "../../components/usuario/tabela";
import Header from "../../components/home/header";
import Rodape from "../../components/home/rodape";

class Usuario extends Component {
    render() {
        return (
            <>
                <Header />
                <Tabela />
                <Rodape />
            </>
        )
    }
}

export default Usuario;
import React from "react";
import Header from "../../components/usuario/header-usuario";
import CorpoServico from "../../components/usuario/corpo-servico";
import Corpo from "../../components/usuario/corpo"
import Rodape from "../../components/home/rodape";

export default function Servico() {
    return(
        <>
            <Header />
            <Corpo />
            <CorpoServico />
            <Rodape />
        </>
    )
}
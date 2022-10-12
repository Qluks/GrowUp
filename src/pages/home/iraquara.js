import React, { Component } from "react";
import Header from "../../components/home/header";
import LogoMunicipios from "../../components/home/logo-municipios";
import Corpo from "../../components/home/corpo/corpoCartorios/iraquara";
import { BodyStyle } from "./styles";

class Caeteacu extends Component {
  render() {
    return (
      <>
        <BodyStyle>
          <Header />
          <LogoMunicipios />
          <Corpo />
        </BodyStyle>
      </>
    );
  }
}

export default Caeteacu;

import React, { Component } from "react";
import Header from "../../components/home/header";
import LogoMunicipios from "../../components/home/logo-municipios";
import Corpo from "../../components/home/corpo/caeteacu";

class Caeteacu extends Component {
  render() {
    return (
      <>
          <Header />
          <LogoMunicipios />
          <Corpo />
      </>
    );
  }
}

export default Caeteacu;

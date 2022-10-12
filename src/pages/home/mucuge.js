import React, { Component } from "react";
import Header from "../../components/home/header";
import LogoMunicipios from "../../components/home/logo-municipios";
import Corpo from "../../components/home/corpo/mucuge";

class Mucuge extends Component {
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

export default Mucuge;

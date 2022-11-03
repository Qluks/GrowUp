import React, { Component } from "react";
import Header from "../../components/home/header";
import LogoMunicipios from "../../components/home/logo-municipios";
import Corpo from "../../components/home/corpo/souto_soares";

class Souto_soares extends Component {
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

export default Souto_soares;

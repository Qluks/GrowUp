import React, { Component } from "react";
import Palmeiras from "../cartorios/palmeiras";
import Mapa from "../mapa/mapa";
import Rodape from "../rodape";

class Corpo extends Component {
  render() {
    return (
      <>
        <Palmeiras />
        <Mapa mapa = " https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.1722466942848!2d-41.574793627819815!3d-12.515404943053182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x769e024f6124433%3A0x7f2a3308c71a2e!2sPra%C3%A7a%20Dr.%20Jos%C3%A9%20Gon%C3%A7alves%2C%2011%20-%20Palmeiras%2C%20BA%2C%2046930-000!5e1!3m2!1spt-BR!2sbr!4v1654299087374!5m2!1spt-BR!2sbr "/>
        <Rodape />
      </>
    );
  }
}

export default Corpo;

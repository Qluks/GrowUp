import React, { Component } from "react";
import Mucuge from "../cartorios/mucuge";
import Mapa from "../mapa/mapa";
import Rodape from "../rodape";

class Corpo extends Component {
  render() {
    return (
      <>
        <Mucuge />
        <Mapa mapa=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1109.7904368104585!2d-41.37214437079472!3d-13.008258592738018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7422f50779386c5%3A0x6808442d2f0459ed!2sR.%20da%20V%C3%A1rzea%20-%20Mucug%C3%AA%2C%20BA%2C%2046750-000!5e1!3m2!1spt-BR!2sbr!4v1654299323466!5m2!1spt-BR!2sbr " />
        <Rodape />
      </>
    );
  }
}

export default Corpo;

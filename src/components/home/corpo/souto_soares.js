import React, { Component } from "react";
import Souto_soares from "../cartorios/souto_soares";
import Mapa from "../mapa/mapa";
import Rodape from "../rodape";

class Corpo extends Component {
  render() {
    return (
      <>
        <Souto_soares />
        <Mapa mapa = " https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1111.545586791256!2d-41.50036585197423!3d-12.610029979612843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7420fbe7e041115%3A0x606f3023068f7c64!2sEmp%C3%B3rio%20Capim%20do%20Vale!5e1!3m2!1spt-BR!2sbr!4v1654299767936!5m2!1spt-BR!2sbr "/>
        <Rodape />
      </>
    );
  }
}

export default Corpo;

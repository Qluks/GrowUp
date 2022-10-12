import React, { Component } from "react";
import Iraquara from "../../cartorios/iraquara";
import Mapa from "../mapa";
import Rodape from "../../rodape";

class Corpo extends Component {
  render() {
    return (
      <>
        <Iraquara />
        <Mapa mapa = " https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15596.06222256808!2d-41.62609476614261!3d-12.247225841931941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x769c038012868ff%3A0xa8c901ac15d05990!2sIraquara%2C%20BA%2C%2046980-000!5e0!3m2!1spt-BR!2sbr!4v1654298253721!5m2!1spt-BR!2sbr "/>
        <Rodape />
      </>
    );
  }
}

export default Corpo;

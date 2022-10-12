import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo2 from "../../../assets/img/logo2.jpg";
import { Nav } from "./styles";
import { ElementoNav } from "./styles";
import { ButtonCidades } from "./styles";

class LogoMunicipios extends Component {
  render() {
    return (
      <>
        <Nav>
          <ElementoNav>
            <img src={logo2} alt="" />
            <div>
              SELECIONE O MUNICÍPIO DESEJADO
              <br />
              PARA INICIAR
            </div>
          </ElementoNav>

          <ButtonCidades>
            <Link to="/">
              <button>PALMEIRAS</button>
            </Link>

            <Link to="/caeteacu">
              <button>CAETÉ AÇU</button>
            </Link>

            <Link to="/mucuge">
              <button>MUCUGÊ</button>
            </Link>

            <Link to="/iraquara">
              <button>IRAQUARA</button>
            </Link>
          </ButtonCidades>
        </Nav>
      </>
    );
  }
}

export default LogoMunicipios;

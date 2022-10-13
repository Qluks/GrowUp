import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { Selecao } from "./style";

export default function Corpo() {
  return (
    <>
      <Container>
        <h1>Olá, Usuário!</h1>
      </Container>

      <Selecao>
        <Link to="/status">
        <button>
          STATUS DE AGENDAMENTO
        </button>
        </Link>
        <button>
          INICIAR NOVO AGENDAMENTO
        </button>
      </Selecao>
    </>
  );
}

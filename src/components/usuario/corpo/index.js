import React from "react";
import { Container } from "./style";
import { Selecao } from "./style";

export default function Corpo() {
  return (
    <>
      <Container>
        <h1>Olá, Usuário!</h1>
      </Container>

      <Selecao>
        <button>
          STATUS DE AGENDAMENTO
        </button>
        <button>
          INICIAR NOVO AGENDAMENTO
        </button>
      </Selecao>
    </>
  );
}

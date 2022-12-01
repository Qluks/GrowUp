import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import { Container } from "./style";
import { Selecao } from "./style";

export default function Corpo() {
  const { user } = useUser()
  return (
    <>
      <Container>
        <h1>Olá, {user.nomeUsuario}!</h1>
      </Container>

      <Selecao>
        <Link to="/status">
        <button>
          STATUS DE AGENDAMENTO
        </button>
        </Link>
        <Link to="/usuario">
        <button>
          INICIAR NOVO AGENDAMENTO
        </button>
        </Link>
      </Selecao>
    </>
  );
}

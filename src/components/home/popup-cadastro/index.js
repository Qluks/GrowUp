import React from "react";
import { Link } from "react-router-dom";
import {
  PopupContainer,
  CloseModalRegistrar,
  ButtonRegistrar,
  PopupRegistrar,
  InputRegistrar,
} from "../card/style";

export default function PopupCadastro(props) {
  return (
    <>
      {props.showPopup ? (
        <PopupRegistrar>
          <PopupContainer>
            <form method="get" action="" />
            <CloseModalRegistrar onClick={props.setShowPopup}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </CloseModalRegistrar>
            <strong>
              <h2>CADASTRAR-SE</h2>
            </strong>
            <h3>
              Insira os dados corretamente para a realização do cadastro
            </h3>

            <InputRegistrar>
              <input
                id="cpf"
                type="text"
                placeholder="Nome completo"
                required
              />
              <input
                id="cpf"
                type="email"
                placeholder="Email"
                required
              />
              <input
                id="cpf"
                type="tel"
                placeholder="Telefone"
                required
              />
              <input
                id="cpf"
                type="text"
                placeholder="CPF"
                required
              />
              <input
                id="cpf"
                type="password"
                placeholder="Senha"
                required
              />
              <input
                id="cpf"
                type="password"
                placeholder="Confirmar Senha"
                required
              />
            </InputRegistrar>

            <ButtonRegistrar>
              <Link to="/usuario">
                <button id="entrar">REALIZAR CADASTRO</button>
              </Link>
            </ButtonRegistrar>
            <form />
          </PopupContainer>
        </PopupRegistrar>
      ) : null}
    </>
  );
}

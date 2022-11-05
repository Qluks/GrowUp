import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PopupContainer,
  CloseModalRegistrar,
  ButtonRegistrar,
  PopupRegistrar,
  InputRegistrar,
} from "../card/style";
import axios from "axios";

export default function PopupCadastro(props) {
  const [cadastro, setCadastro] = useState({
    nomeUsuario: "",
    cpfUsuario: "",
    emailUsuario: "",
    senhaUsuario: "",
  });
  let navigate = useNavigate();
  function handleChange(event) {
    setCadastro({ ...cadastro, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8080/usuario/create/", cadastro)
      .catch(function (error) {
        if (error.message === "Network Error") {
          console.log("Erro no servidor.");
          return;
        }
        console.log("Erro ao tentar criar usuário.");
        console.log(error.message);
      })
      .then(() => {
        navigate("/usuario");
      });
  }

  return (
    <>
      {props.showPopup ? (
        <PopupRegistrar>
          <PopupContainer>
            <form onSubmit={handleSubmit} />
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
            <h3>Insira os dados corretamente para a realização do cadastro</h3>

            <InputRegistrar>
              <input
                id="nome"
                type="text"
                name="nomeUsuario"
                placeholder="Nome completo"
                required
                onChange={handleChange}
              />
              <input
                id="email"
                type="email"
                name="emailUsuario"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <input
                id="telefone"
                type="tel"
                placeholder="Telefone"
                required
                onChange={handleChange}
              />
              <input
                id="cpf"
                type="text"
                name="cpfUsuario"
                placeholder="CPF"
                required
                onChange={handleChange}
              />
              <input
                id="senha"
                type="password"
                name="senhaUsuario"
                placeholder="Senha"
                required
                onChange={handleChange}
              />
              <input
                id="confirmSenha"
                type="password"
                placeholder="Confirmar Senha"
                required
                onChange={handleChange}
              />
            </InputRegistrar>

            <ButtonRegistrar>
              <input
                id="submit"
                type="submit"
                value="REALIZAR CADASTRO"
                className="btn btn-success"
                onClick={handleSubmit}
              />
            </ButtonRegistrar>
            <form />
          </PopupContainer>
        </PopupRegistrar>
      ) : null}
    </>
  );
}

import React, { useState } from "react";
import documentacao from "../../../assets/img/Documentação.pdf";
import PopupCadastro from "../popup-cadastro";
import { Link, useNavigate } from "react-router-dom";
import { Span } from "./style";
import { ListaFilha } from "./style";
import { ButtonIniciarAgenda } from "./style";
import { PopupRegistrar } from "./style";
import { PopupContainer } from "./style";
import { CloseModalRegistrar } from "./style";
import { InputRegistrar } from "./style";
import { ButtonRegistrar } from "./style";
import { useUser } from "../../../context/UserContext";
import axios from "axios";

export default function Card(props) {
  const [show, setShow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupCadastro, setShowPopupCadastro] = useState(false);
  const [login, setLogin] = useState({
    cpfUsuario: "",
    senhaUsuario: "",
  });

  const { user, setUser } = useUser();

  let navigate = useNavigate();

  function handleChange(event) {
    setLogin({ ...login, [event.target.name]: event.target.value });
  }

  async function handleLogin() {
    let data;
    await axios
      .get("http://localhost:8080/usuario/list/")
      .catch(function (error) {
        if (error.message === "Network Error") {
          console.log("Erro no servidor.");
          return;
        }
        console.log(error.message);
      })
      .then((response) => {
        data = response.data;
        data.forEach((user) => {
          if (
            user.cpfUsuario === login.cpfUsuario &&
            user.senhaUsuario === login.senhaUsuario
          ) {
            setUser(user);
            navigate("/usuario");
          }
        });
      });
    console.log(user)
    if (!user) {
      // alert("Usuario não encontrado. Tente Novamente");
    }
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
      <Span onClick={() => setShow(!show)}>{props.name}</Span>
      {show ? (
        <ul>
          <ListaFilha>
            Documentação necessária:{" "}
            <a
              href={documentacao}
              style={{ color: "#050539; text-decoration: underline;" }}
              download
            >
              {" "}
              Clique para baixar o arquivo{" "}
            </a>
            <br />
            <div>{props.loc}</div>
            <div>Horário de funcionamento: 08 às 14hr</div>
            <ButtonIniciarAgenda
              onClick={() => {
                if (!user) {
                  setShowPopup(!showPopup);
                  return;
                }
                navigate("/usuario");
              }}
            >
              INICIAR AGENDAMENTO
            </ButtonIniciarAgenda>
          </ListaFilha>
        </ul>
      ) : null}

      {/* -- Popup de Login -- */}
      {showPopup ? (
        <PopupRegistrar>
          <PopupContainer>
            <form method="get" action="" />
            <CloseModalRegistrar onClick={() => setShowPopup(!showPopup)}>
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
              <h2 style={{ color: "white" }}>LOGIN</h2>
            </strong>
            <h3>
              Caso ja tenha cadastro, faça seu login para realizar o agendamento
              a partir do seu perfil
            </h3>

            <InputRegistrar>
              <input
                id="cpf"
                type="text"
                placeholder="  CPF"
                name="cpfUsuario"
                onChange={handleChange}
                required
              />
              <input
                id="senha"
                type="password"
                name="senhaUsuario"
                placeholder="  SENHA"
                onChange={handleChange}
                required
              />
            </InputRegistrar>

            <ButtonRegistrar>
              <button id="entrar" onClick={handleLogin}>
                ENTRAR222
              </button>
              <button onClick={() => setShowPopupCadastro(!showPopupCadastro)}>
                CADASTRAR
              </button>
            </ButtonRegistrar>
            <form />
          </PopupContainer>
        </PopupRegistrar>
      ) : null}
      <PopupCadastro
        showPopup={showPopupCadastro}
        setShowPopup={() => setShowPopupCadastro(!showPopupCadastro)}
      />
    </>
  );
}

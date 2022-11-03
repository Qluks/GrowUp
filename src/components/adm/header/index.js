import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderStyle } from "./styles";
import { ButtonLogin } from "./styles";
import { LocalizacaoInicio } from "./styles";
import { FormPopup, NomeUsuario, FotoLogin, IconSair } from "./styles";

export default function Header(props) {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: 3500,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <>
      <HeaderStyle>
        <ButtonLogin onClick={() => setShow(!show)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-person-circle"
            id="login"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </ButtonLogin>
        <Link to="/">
          <LocalizacaoInicio
            href={scrollToBottom}
            onClick={scrollToBottom}
            className="scrolllocal"
          >
            LOCALIZAÇÃO
          </LocalizacaoInicio>
        </Link>
        <Link to="/">
          <LocalizacaoInicio
            className="scrollToTop"
            href={scrollToTop}
            onClick={scrollToTop}
          >
            INÍCIO
          </LocalizacaoInicio>
        </Link>
        {show ? (
          <FormPopup>
            <form>
              <FotoLogin
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                id="fotologin"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </FotoLogin>
              <NomeUsuario>{props.nomeADM}</NomeUsuario>
              <Link to="/">
                <a>
                  <IconSair
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    fill="currentColor"
                    className="bi bi-box-arrow-in-right"
                    id="sair"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </IconSair>{" "}
                </a>{" "}
              </Link>
              <button>
                <h2>SAIR</h2>
              </button>
            </form>
          </FormPopup>
        ) : null}
      </HeaderStyle>
    </>
  );
}

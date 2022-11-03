import React, { useState } from "react";
import { HeaderStyle } from "./styles";
import { ButtonLogin } from "./styles";
import { LocalizacaoInicio } from "./styles";
import { FormPopup } from "./styles";
import { FormContainer } from "./styles";
import { TxtLogin } from "./styles";
import { ButtonEntrar } from "./styles";
import { Link } from "react-router-dom";

export default function Header() {
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
            class="bi bi-person-circle"
            id="login"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </ButtonLogin>
        <LocalizacaoInicio
          href={scrollToBottom}
          onClick={scrollToBottom}
          className="scrolllocal"
        >
          LOCALIZAÇÃO
        </LocalizacaoInicio>
        <LocalizacaoInicio
          className="scrollToTop"
          href={scrollToTop}
          onClick={scrollToTop}
        >
          INÍCIO
        </LocalizacaoInicio>
        {show ? (
          <FormPopup>
            <FormContainer>
              <TxtLogin>LOGIN</TxtLogin>
              <input type="text" placeholder="CPF" name="CPF" required />
              <input type="password" placeholder="SENHA" name="psw" required />
                <Link to="/administrador">
                  <ButtonEntrar>ENTRAR</ButtonEntrar>
                </Link>
            </FormContainer>
          </FormPopup>
        ) : null}
      </HeaderStyle>
    </>
  );
}

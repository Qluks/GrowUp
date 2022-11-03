import React from "react";
import { MapaStyle } from "./style";
import { EmailMapa } from "./style";
import { Email } from "./style";
import { Mensagem } from "./style";
import { EnviarEmail } from "./style";
import { MapaLoc } from "./style";

export default function Mapa(props) {
  return (
    <>
      <MapaStyle>
        <EmailMapa>
          <h1>
            TEM ALGUMA DÚVIDA?
          </h1>
          <h2>
            Fale conosco:
          </h2>
          <Email
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required=""
          />
          <br />
          <Mensagem
            className="form-control"
            name="mensagem"
            cols="30"
            placeholder="Mensagem"
            rows="4"
            required=""
          >
            {" "}
          </Mensagem>
          <EnviarEmail>ENVIAR</EnviarEmail>
        </EmailMapa>
        <MapaLoc>
          <iframe
            title="Localizção do cartório"
            id="mapa2"
            src={props.mapa}
            width={600}
            height={450}
            style={{ border: "0;" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapaLoc>
      </MapaStyle>
    </>
  );
}

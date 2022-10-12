import React from "react";

export default function Mapa(props) {
  return (
    <>
      <div id="mapa">
        <div id="email_mapa">
          <h1 style={{ color: "#050539;", marginLeft: "-7px;" }}>
            TEM ALGUMA DÚVIDA?
          </h1>
          <h2
            style={{
              marginLeft: "20px;",
              marginBottom: "-10px;",
              color: "#050539;",
            }}
          >
            Fale conosco:
          </h2>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            placeholder="Seu e-mail"
            required=""
          />
          <br />
          <textarea
            class="form-control"
            name="mensagem"
            id="mensagem"
            cols="30"
            placeholder="Mensagem"
            rows="4"
            required=""
          >
            {" "}
          </textarea>
          <button id="enviarEmail">ENVIAR</button>
        </div>
        <div id="mapa1">
          <iframe
            title="Localizção do cartório"
            id="mapa2"
            src={props.mapa}
            width={600}
            height={450}
            style={{ border: "0;" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { Tr } from "./style";
import { Td } from "./style";
import { Informes } from "./style";

export default function Conteudo(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Tr>
        <Td>{props.data}</Td>
        <Td>{props.nome}</Td>
        <Td>{props.status}</Td>
        <Td>
          <label>
            <span onClick={() => setShow(!show)}>
              <img
                src="https://api.iconify.design/bi/play-circle-fill.svg?color=white"
                alt="seta dentro de um  circulo"
                style={{ height: "25px;", width: "auto;", cursor: "pointer;", display: 'none;' }}
              />
            </span>
          </label>
        </Td>
      </Tr>
      {show ? (
        <div>
          <Informes style={{ display: "none;" }} />
          <Td>
            <div
              style={{
                float: "left;",
                marginLeft: "3px;",
                width: "220px;",
                textAlign: "left;",
                fontSize: "18px;",
              }}
            >
              Enviar nova documentação (se necessário):
            </div>
            <br />

            <input
              type="file"
              style={{
                marginTop: "10px;",
                marginLeft: "0px;",
                marginBottom: "27px;",
              }}
            />
            <br />

            <input type="checkbox" style={{ float: "left;" }} />
            <div style={{ fontSize: "14px;" }}>
              Salvar documentação para utilizar depois
            </div>
          </Td>
          <Td>
            <textarea
              name="descricao"
              id="descricao"
              cols="30"
              rows="10"
              disabled=""
              placeholder="Feedback recebido"
              style={{
                backgroundColor: "#dcdbe570;",
                cursor: "no-drop;",
                borderColor: "#bcbcbc;",
                marginLeft: "50px;",
                borderRadius: "5px;",
                width: "400px;",
                padding: "5px;",
                height: "90px;",
                marginTop: "12px;",
              }}
            ></textarea>
          </Td>
          <Td>
            <strong style={{ fontSize: "20px;", marginLeft: "44px;" }}>
              {" "}
              Data marcada
              <br />
            </strong>
            <input
              type="date"
              id="data"
              disabled=""
              style={{
                marginTop: "10px;",
                cursor: "no-drop;",
                borderRadius: "7px;",
                borderWidth: "1px;",
                borderColor: "#bcbcbc;",
                backgroundColor: "transparent;",
                height: "30px;",
                width: "120px;",
                marginLeft: "45px;",
              }}
            />
          </Td>
        </div>
      ) : null}
    </>
  );
}

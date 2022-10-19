import React, { useState } from "react";
import { Tr } from "./style";
import { Td, TdIcon, Table } from "./style";
import { Informes, DivInformes, InputEnviar, InputData } from "./style";

export default function Conteudo(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Table>
        <Tr>
          <Td>{props.data}</Td>
          <Td>{props.nome}</Td>
          <Td>{props.status}</Td>
          <TdIcon>
            <label>
              <span onClick={() => setShow(!show)}>
                <img
                  src="https://api.iconify.design/bi/play-circle-fill.svg?color=white"
                  alt="seta dentro de um  circulo"
                />
              </span>
            </label>
          </TdIcon>
        </Tr>
        {show ? (
          <DivInformes>
            <Informes>
              <Td>
                <div>Enviar nova documentação (se necessário):</div>
                <br />

                <InputEnviar type="file" />
                <br />

                <input type="checkbox" style={{ float: "left;" }} />
                <div>Salvar documentação para utilizar depois</div>
              </Td>
              <Td>
                <textarea
                  name="descricao"
                  id="descricao"
                  cols="30" 
                  rows="10"
                  disabled=""
                  placeholder="Feedback recebido"
                ></textarea>
              </Td>
              <Td>
                <strong style={{ fontSize: "20px;", marginLeft: "44px;" }}>
                  {" "}
                  Data marcada
                  <br />
                </strong>
                <InputData type="date" disabled="" />
              </Td>
            </Informes>
          </DivInformes>
        ) : null}
      </Table>
    </>
  );
}

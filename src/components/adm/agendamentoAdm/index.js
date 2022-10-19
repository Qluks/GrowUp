import React, { useState } from "react";
import { Table, Tr } from "./style";
import { Td, TdIcon, InputData, InputEnviar } from "./style";
import { Informes, DivInformes, Status, Concluido, Pendente } from "./style";

export default function Conteudo(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Table>
        <Tr>
          <Td>{props.data}</Td>
          <Td>{props.nome}</Td>
          <Td>
            <Status>
              <Concluido value="concluido">Concluído</Concluido>
              <Pendente value="pendente">Pendente</Pendente>
              <option value="analise" id="analise" selected>
                Em análise
              </option>
            </Status>
          </Td>
          <TdIcon>
            <label>
              <span onClick={() => setShow(!show)}>
                <img
                  src="https://api.iconify.design/bi/play-circle-fill.svg?color=white"
                  alt="seta dentro de um  circulo"
                  style={{
                    height: "25px;",
                    width: "auto;",
                    cursor: "pointer;",
                    display: "none;",
                  }}
                />
              </span>
            </label>
          </TdIcon>
        </Tr>
        {show ? (
          <DivInformes>
            <Informes>
              <Td>
                <div>{props.email}</div>
                <br />
                <div>{props.telefone}</div>
                <br />
                <div>{props.servico}</div>
                <br />
                <br />
                <div>DOCUMENTAÇÃO: </div>
                <br />
                <InputEnviar type="button" value="CPF.pdf" />
                <InputEnviar type="button" value="CPF.pdf" />
                <InputEnviar type="button" value="CPF.pdf" />
                <br />
              </Td>
              <Td>
                <textarea
                  name="descricao"
                  id="descricao"
                  cols="30"
                  rows="10"
                  placeholder="Adicionar feedback:"
                ></textarea>
              </Td>
              <Td>
                <strong style={{ fontSize: "20px;", marginLeft: "44px;" }}>
                  {" "}
                  Data marcada
                  <br />
                </strong>
                <InputData type="date" id="data" disabled="" />
              </Td>
            </Informes>
          </DivInformes>
        ) : null}
      </Table>
    </>
  );
}

import React from "react";
import Conteudo from "../conteudo";

export default function Tabela() {
  return (
    <>
      <table>
        <tr style={{ marginTop: "-10px;" }}>
          <th style={{ marginLeft: "12px;" }}>DATA DE ENVIO</th>
          <th>SERVIÇO</th>
          <th style={{ marginLeft: "-40px;" }}> STATUS</th>
        </tr>
        <br />
        <Conteudo
          data=" 23/04 "
          nome=" Registro de emancipações e interdições "
          status=" Em análise "
        />
        <br />
        <Conteudo
          data=" 23/04 "
          nome=" Reconhecimento de paternidade "
          status=" Pendente "
        />
        <br />
        <Conteudo
          data=" 22/04 "
          nome=" Autenticação (cópia autenticada) "
          status=" Concluída "
        />
        <br />
        <Conteudo
          data=" 21/04 "
          nome=" Dissolução de Sociedade "
          status=" Concluída "
        />
        <br />
        <Conteudo data=" 18/04 " nome=" Declaração " status=" Em análise " />
        <br />
      </table>
    </>
  );
}

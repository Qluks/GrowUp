import React from "react";
import Agendamento from "../agendamentoAdm"

export default function TabelaAdm() {
  return (
    <>
      <table>
        <tr style={{ marginTop: "5px;", marginBottom: "-5px;"}}>
          <th style={{marginLeft: "12px;"}}>DATA RECEBIDA</th>
          <th>NOME DO REQUERINTE</th>
          <th style={{marginLeft: "-40px;"}}>STATUS</th>
        </tr>
        <br />
        <Agendamento
          data="23/04"
          nome="Maria Eduarda Souto Gomes da Silva"
          email="Email: mariajose100jesus@hotmail.com"
          telefone="Telefone: (75)99745-3386"
          servico="Serviço: Registro de óbitos"
        />
        <br />
        <Agendamento
          data="23/04"
          nome="José Gomes da Silva"
          email="Email: mariajose100jesus@hotmail.com"
          telefone="Telefone: (75)99745-3386"
          servico="Serviço: Registro de óbitos"
        />
        <br />
        <Agendamento data="22/04"
          nome="Márcio José Francisco Ferraz"
          email="Email: mariajose100jesus@hotmail.com"
          telefone="Telefone: (75)99745-3386"
          servico="Serviço: Registro de óbitos"
        />
        <br />
        <Agendamento data="21/04"
          nome="Maria José da Silva"
          email="Email: mariajose100jesus@hotmail.com"
          telefone="Telefone: (75)99745-3386"
          servico="Serviço: Registro de óbitos"
        />
        <br />
        <Agendamento data="18/04"
          nome="Bruna Gonçalves Ferreira"
          email="Email: mariajose100jesus@hotmail.com"
          telefone="Telefone: (75)99745-3386"
          servico="Serviço: Registro de óbitos"
        />
        <br />
      </table>
    </>
  );
}

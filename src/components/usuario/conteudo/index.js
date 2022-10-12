import React from "react";

export default function Conteudo(props) {
  return (
    <>
      <tr>
        <td class="data">{ props.data }</td>
        <td class="nome">{ props.nome }</td>
        <td class="analise">{ props.status }</td>
        <td class="exibirMais">
          <label>
            <input type="checkbox" id="exp_1" onclick="expandir()" />
          </label>
        </td>
      </tr>
    </>
  );
}

import React from "react";

export default function CardConteudo() {
  return (
    <>
      <tr class="informes" id="inf4" style="display: none;" />
      <td>
        <div style="float:left ; margin-left: 3px; width: 220px; text-align: left; font-size: 18px; ">
          Enviar nova documentação (se necessário):
        </div>
        <br />

        <input
          type="file"
          style="margin-top: 10px; margin-left: 0px; margin-bottom: 27px;"
        />
        <br />

        <input type="checkbox" style="float: left;" />
        <div style="font-size: 14px;">
          Salvar documentação para utilizar depois
        </div>
      </td>
      <td>
        <textarea
          name="descricao"
          id="descricao"
          cols="30"
          rows="10"
          disabled=""
          placeholder="Feedback recebido"
          style="background-color: #dcdbe570; cursor: no-drop; border-color:#bcbcbc; margin-left: 50px; border-radius: 5px; width: 400px; padding: 5px; height: 90px; margin-top: 12px;"
        ></textarea>
      </td>
      <td>
        <strong style="font-size: 20px; margin-left:44px;">
          {" "}
          Data marcada
          <br />
        </strong>
        <input
          type="date"
          id="data"
          disabled=""
          style="margin-top: 10px; cursor: no-drop; border-radius: 7px;border-width: 1px; border-color: #bcbcbc; background-color: transparent; height: 30px; width: 120px; margin-left:45px;"
        />
      </td>
      <tr />
    </>
  );
}

import React from "react";
import precos from "../../../assets/img/valores.pdf";
import Card from "../card/card";

export default function Caeteacu() {
  return (
    <div>
      {/* -- Serviços -- */}
      <section />
      <div id="container">
        <h1>SERVIÇOS</h1>
      </div>

      <a href={precos} download>
        {" "}
        <button id="valores"> CONSULTE A TABELA DE PREÇOS </button>
      </a>

      {/* -- Registro Civil -- */}
      <div className="registroCivil">
        <span id="título">{" REGISTRO CIVIL DAS PESSOAS NATURAIS: "}</span>
        <br />
        <Card name=" Atos acessórios relativos a todos os serviços citados abaixo: averbações de separações, divórcios, óbitos e casamentos " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Buscas de registros " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Processos de serviços tardios e restauração de primeiro registro de nascimento " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Reconhecimento de paternidade " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Registro de casamento " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Registro de emancipações e interdições " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Registro de nascimento. (Certidão comum ou de inteiro teor) " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Registro de óbitos. (Certidão comum ou de inteiro teor) " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <br />
        <span id="título">
          {" TABELIONATO DE NOTAS: "}
        </span>
        <br />
        <Card name=" Abertura de ficha de Assinatura (abrir firma) " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Atas notariais para de Usucapião " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Atas notariais para fins diversos " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Autenticação (cópia autenticada) " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Certidão de atos registrados no próprio Cartório " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Compra e Venda " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Declaração " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Dissolução de Sociedade " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Doação " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Emancipação " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Inventário e Partilha " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Pacto Antenupcial " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Procuração Pública para todos os fins " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Reconhecimento de assinatura (reconhecer firma aberta) " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Reconhecimento de Paternidade " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Reconhecimento de sinal público " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Separação ou Divórcio " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" Testamentos cerrados ou públicos " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
        <Card name=" União Estável " loc="Localização do cartório: Rua dos Gatos, s/n, Galeria Empório do Vale, Sala 1 " />
        <br />
      </div>

      <section />
    </div>
  );
}

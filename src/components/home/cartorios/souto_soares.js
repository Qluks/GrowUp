import React from "react";
import precos from "../../../assets/img/valores.pdf";
import Card from "../card/card";
import { ContainerCorpo } from "./style";
import { Valores } from "./style";
import { RegistroCivil } from "./style";
import { Titulo } from "./style";

export default function Souto_soares() {
  return (
    <div>
      {/* -- Serviços -- */}
      <section />
      <ContainerCorpo>
        <h1>SERVIÇOS</h1>
      </ContainerCorpo>

      <a href={precos} download>
        {" "}
        <Valores> CONSULTE A TABELA DE PREÇOS </Valores>
      </a>

      {/* -- Registro Civil -- */}
      <RegistroCivil>
        <Titulo>{" REGISTRO CIVIL DAS PESSOAS NATURAIS: "}</Titulo>
        <br />
        <Card name=" Atos acessórios relativos a todos os serviços citados abaixo: averbações de separações, divórcios, óbitos e casamentos " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Buscas de registros " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Processos de serviços tardios e restauração de primeiro registro de nascimento " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Reconhecimento de paternidade " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Registro de casamento " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Registro de emancipações e interdições " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Registro de nascimento. (Certidão comum ou de inteiro teor) " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Registro de óbitos. (Certidão comum ou de inteiro teor) " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <br />
        <Titulo>
          {" TABELIONATO DE NOTAS: "}
        </Titulo>
        <br />
        <Card name=" Abertura de ficha de Assinatura (abrir firma) " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Atas notariais para de Usucapião " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Atas notariais para fins diversos " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Autenticação (cópia autenticada) " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Certidão de atos registrados no próprio Cartório " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Compra e Venda " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Declaração " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Dissolução de Sociedade " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Doação " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Emancipação " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Inventário e Partilha " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Pacto Antenupcial " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Procuração Pública para todos os fins " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Reconhecimento de assinatura (reconhecer firma aberta) " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Reconhecimento de Paternidade " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Reconhecimento de sinal público " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Separação ou Divórcio " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Testamentos cerrados ou públicos " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" União Estável " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <br />
        <br />
        <Titulo>
          {" PROTESTO DE TÍTULOS: "}
        </Titulo>
        <br />
        <Card name=" Cancelamento de Título Protestado " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Lavrar e registrar o protesto ou acatar a desistência do credor " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Prestar informações e fornecer certidões relativas a todos os atos praticados " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Proceder às averbações " loc="Rua Idalina Pinto, s/n, Centro " />
        <br />
        <Card name=" Protesto de contrato de locação de veículo " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Protesto de contratos de compromisso ou promessa de compra e venda, promessa de cessão ou cessão de direitos " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Protesto de letra de câmbio, nota promissória, duplicata, debênture ou cheque " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Protesto do documento particular que origine uma dívida " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
        <Card name=" Receber pagamento de títulos e outros documentos de dívida " loc="Rua Idalina Pinto, s/n, Centro" />
        <br />
      </RegistroCivil>

      <section />
    </div>
  );
}

import React from "react";
import precos from "../../../assets/img/valores.pdf";
import Card from "../card/card";
import { ContainerCorpo } from "./style";
import { Valores } from "./style";
import { RegistroCivil } from "./style";
import { Titulo } from "./style";

export default function Palmeiras() {
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
        <Card name=" Atos acessórios relativos a todos os serviços citados abaixo: averbações de separações, divórcios, óbitos e casamentos " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Buscas de registros " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Processos de serviços tardios e restauração de primeiro registro de nascimento " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Reconhecimento de paternidade " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Registro de casamento " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Registro de emancipações e interdições " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Registro de nascimento. (Certidão comum ou de inteiro teor) " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Registro de óbitos. (Certidão comum ou de inteiro teor) " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <br />
        <Titulo>
          {" TÍTULOS E DOCUMENTOS CIVIS DAS PESSOAS JURÍDICAS: "}
        </Titulo>
        <br />
        <Card name=" Atos administrativos judiciais " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão de Busca de Títulos e Documentos de Pessoa Jurídica " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão de Busca de Títulos e Documentos " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão de Títulos e Documentos de Atos Constitutivos " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão de Títulos e Documentos em Inteiro Teor " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão de Títulos e Documentos Resumida " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão Negativa de Regimento Interno de Condomínio " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Conservação de documentos e Registro de contratos em geral " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Registrar alterações contratuais, estatutárias, atas, balanços, livros contábeis ou de atas " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Registro de fundação, estatuto, atas e dissolução de sociedades civis, religiosas, científicas, políticas, de notícias " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Registro de sociedade civil " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <br />
        <Titulo>
          {" TABELIONATO DE NOTAS: "}
        </Titulo>
        <br />
        <Card name=" Abertura de ficha de Assinatura (abrir firma) " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Atas notariais para de Usucapião " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Atas notariais para fins diversos " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Autenticação (cópia autenticada) " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão de atos registrados no próprio Cartório " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Compra e Venda " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Declaração " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Dissolução de Sociedade " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Doação " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Emancipação " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Inventário e Partilha " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Pacto Antenupcial " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Procuração Pública para todos os fins " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Reconhecimento de assinatura (reconhecer firma aberta) " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Reconhecimento de Paternidade " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Reconhecimento de sinal público " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Separação ou Divórcio " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Testamentos cerrados ou públicos " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" União Estável " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <br />
        <Titulo>
          {" PROTESTO DE TÍTULOS: "}
        </Titulo>
        <br />
        <Card name=" Cancelamento de Título Protestado " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Lavrar e registrar o protesto ou acatar a desistência do credor " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Prestar informações e fornecer certidões relativas a todos os atos praticados " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Proceder às averbações " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Protesto de contrato de locação de veículo " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Protesto de contratos de compromisso ou promessa de compra e venda, promessa de cessão ou cessão de direitos " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Protesto de letra de câmbio, nota promissória, duplicata, debênture ou cheque " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Protesto do documento particular que origine uma dívida " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Receber pagamento de títulos e outros documentos de dívida " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <br />
        <Titulo>
          {" REGISTRO DE IMÓVEIS E HIPOTECAS: "}
        </Titulo>
        <br />
        <Card name=" Averbações " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Benfeitorias " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão de Ações Reais e Pessoais Reipersecutórias " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão de Inteiro Teor do Imóvel " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão de Ônus Reais mais Ações Reais e Pessoais Reipersecutórias " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão de Ônus Reais " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão de Transcrição de Imóvel mais Ônus Reais " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão de Transcrição de Imóvel " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão Dominial " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão em Inteiro Teor do Imóvel mais Ônus Reais " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão em Inteiro Teor do Imóvel " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão Negativa de Bens do Casal ou Sócios " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão Negativa de Bens do casal " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão Negativa de Bens " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidão Trintenária " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Certidões de atos registrados " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Doação " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Hipotecas " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Matrícula de Imóvel Atualizada mais Certidão de Ônus Reais e Ações Reipersecutórias " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Matrícula de Imóvel Atualizada mais Ônus Reais e Ações Reipersecutórias " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Matrícula de Imóvel Atualizada mais Ônus Reais " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Matrícula de Imóvel Atualizada " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Matrícula do imóvel " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Penhoras " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Permutas " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Usucapião " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
        <Card name=" Usufruto " loc=" Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro " />
        <br />
      </RegistroCivil>

      <section />
    </div>
  );
}

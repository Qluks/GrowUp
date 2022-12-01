import React from "react";
import { ListaFilha } from "./style";
import { ButtonIniciarAgendamento } from "./style";
import { ButtonSelecionar2 } from "./style";
import { Container2 } from "./style";
import { Section } from "./style";
import { Titulo } from "./style";
import { Titulo2 } from "./style";
import { Doc } from "./style";
import { ButtonEnviar } from "./style";
import { Input } from "./style";

export default function CorpoServico() {
  return (
    <>
      <Section>
        <Container2>
          <Titulo>SELECIONE A DOCUMENTAÇÃO DESEJADA</Titulo>
          <ul
            id="listaPalmeiras"
            style={{ display: "none;", marginTop: "-40px;" }}
          >
            <ListaFilha>
              Documentação necessária:{" "}
              <a
                href="imagens/Documentação.pdf"
                style={{ color: "#050539;", textDecoration: "underline;" }}
                download
              >
                {" "}
                Clique para baixar o arquivo{" "}
              </a>{" "}
              <br />
              <div class="localizaçãoCartório">
                {" "}
                Localização do cartório: Praça Dr. José Gonçalves, n° 11, centro{" "}
              </div>
              <div class="horário">Horário de funcionamento: 08 às 14hr</div>
              <ButtonIniciarAgendamento
                style={{ opacity: "0.2;", cursor: "default;" }}
              >
                INICIAR AGENDAMENTO
              </ButtonIniciarAgendamento>
            </ListaFilha>
            <Titulo2
              style={{
                fontSize: "22px;",
                fontWeight: "bold;",
                paddingTop: "30px;",
                color: "#050539;",
                cursor: "default;",
              }}
            >
              SELECIONE A DOCUMENTAÇÃO DESEJADA
            </Titulo2>
            <br />
            <br />
            <ButtonSelecionar2 onclick="alterar(this)">
              CPF
            </ButtonSelecionar2>{" "}
            <ButtonSelecionar2>CERTIDÃO</ButtonSelecionar2>{" "}
            <ButtonSelecionar2>RG</ButtonSelecionar2> <input id="docSelecionado" type="file" />
            <br />
            <br />
            <br />
            <Input type="checkbox" />
            <Doc>Salvar documentação para utilizar depois</Doc>
            <ButtonEnviar>ENVIAR</ButtonEnviar>
          </ul>
        </Container2>
      </Section>
    </>
  );
}

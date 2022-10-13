import styled from "styled-components";

export const ListaFilha = styled.li`
  margin-top: 15px;
  background-color: #f8f8f8;
  width: 550px;
  height: 110px;
  border-radius: 10px;
  box-shadow: 0px 5px 5px rgba(48, 48, 48, 0.578);
  padding-left: 25px;
  padding-top: 15px;
  color: #050539;
  cursor: default;
  line-height: 22px;
  list-style: none;
  font-size: 16px;
`;

export const ButtonIniciarAgendamento = styled.button`
  background-color: #312e59;
  float: right;
  margin-right: 10px;
  width: 37%;
  height: 25px;
  text-align: center;
  margin-top: 5px;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.578);
  }
`;

export const ButtonSelecionar2 = styled.button`
  width: 125.54px;
  height: 35.2px;
  background-color: #312e59;
  color: white;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    color: #050539;
    background-color: #eeedf5;
  }
`;

export const ButtonEnviar = styled.button`
  width: 125.54px;
  height: 35.2px;
  background-color: #312e59;
  color: white;
  border-radius: 5px;
  border: none;
  margin-left: 85%;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Section = styled.section`
  margin-top: 0px;
  padding-top: 30px;
`;

export const Container2 = styled.div`
  height: auto;
  width: 75%;
  background-color: #dcdbe5;
  border-radius: 8.39px;
  margin-left: auto;
  margin-right: auto;
`;

export const Titulo = styled.div`
  font-size: 24px;
  margin-left: 40px;
  font-weight: bold;
  padding-top: 30px;
  color: rgb(5, 5, 57);
  cursor: default;
  fontsize: 22px;
  font-weight: bold;
  padding-top: 30px;
  color: #050539;
  cursor: default;
`;

export const Titulo2 = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-top: 30px;
  color: rgb(5, 5, 57);
  cursor: default;
  fontsize: 22px;
  font-weight: bold;
  padding-top: 30px;
  color: #050539;
  cursor: default;
`;

export const Doc = styled.div`
  font-size: 18px;
  margin-left: 20px;
  display: block;
  list-style-type: disc;
  font-family: "Times New Roman", Times, serif;
`;

export const Input = styled.input`
  float: left;
  height: 16px px;
  width: 16px;
  margin-right: 10px;
`;

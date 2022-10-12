import styled from "styled-components";

export const MapaStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EmailMapa = styled.div`
  margin-left: 135px;
  margin-top: 60px;

  h1 {
    color: #050539;
  }

  h2 {
    margin-bottom: -10px;
    color: #050539;
  }
`;

export const Email = styled.input`
  margin: 20px;
  background-color: #dcdbe5;
  border-radius: 3px;
  box-shadow: 0px 5px 3px rgba(48, 48, 48, 0.578);
  border: none;
  width: 510px;
  margin-left: -2px;
  height: 36px;
  padding-left: 10px;
`;

export const Mensagem = styled.textarea`
  margin: 20px;
  margin-top: 5px;
  margin-left: -2px;
  background-color: #dcdbe5;
  border: none;
  box-shadow: 0px 5px 3px rgba(48, 48, 48, 0.578);
  padding-left: 10px;
  width: 510px;
  height: 135px;
`;

export const EnviarEmail = styled.button`
  background-color: #050539;
  border: none;
  border-radius: 7px;
  height: 38.02px;
  width: 120px;
  color: white;
  font-size: 18px;
  margin-left: 61%;
  cursor: pointer;
`;

export const MapaLoc = styled.div`
  margin-right: 15%;
  margin-top: 30px;
  width: 500px;
  height: 200px;
`;

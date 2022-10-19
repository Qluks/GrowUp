import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #050539;
  width: 100%;
  height: 10%;
  position: fixed;
`;

export const ButtonLogin = styled.button`
  float: right;
  padding-left: 40px;
  color: white;
  background-color: #050539;
  border: none;
  text-align: center;
  padding-top: 15px;
  padding-right: 20px;
  cursor: pointer;
`;

export const LocalizacaoInicio = styled.a`
  padding-left: 40px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  float: right;
  padding-top: 22px;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  max-width: 300px;
  padding: 10px;
  background-color: #312e59;
  text-align: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 20px 100px rgba(0, 0, 0, 0.578);

  btn {
    background-color: #312e59;
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    width: auto;
    margin-bottom: 10px;
    opacity: 0.8;
    border-radius: 5px;
  }

  input {
    width: 80%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #c6c5cd;
    border-radius: 5px;
  }
`;

export const TxtLogin = styled.div`
  padding: 5%;
  font-size: 20px;
  color: white;
  text-align: left;
`;

export const ButtonEntrar = styled.button`
  position: relative;
  text-decoration: none;
  background-color: #4e4992;
  color: rgb(255, 255, 255);
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: auto;
  margin-bottom: 10px;
  opacity: 0.8;
  border-radius: 5px;
`;

export const FormPopup = styled.div`
  position: fixed;
  top: 10%;
  right: 0px;
  z-index: 9;

  form {
    padding: 10px;
    background-color: #050539;
    text-align: center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0px 20px 100px rgba(0, 0, 0, 0.578);
    height: 160px !important;
    width: 180px !important;

    button {
      float: right;
      background-color: transparent;
      border: none;
      color: white;
      padding-top: 20px;
      font-family: "Times New Roman", Times, serif;
      float: left;
      padding-left: 15px;
      font-size: 15px;
    }
  }
`;

export const NomeUsuario = styled.h2`
  color: white;
  padding-top: 10px;
  height: 15px;
  width: 100px;
  float: left;
  padding-left: 1px;
`;

export const FotoLogin = styled.svg`
  color: white;
  float: left;
  padding-top: 25px;
  padding-left: 10px;
`;

export const IconSair = styled.svg`
  color: white;
  float: left !important;
  padding-top: 30px;
  padding-left: 3px;
`;

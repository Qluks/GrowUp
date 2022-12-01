import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #050539;
  margin-bottom: 500px;
  width: 100%;
  height: 10%;
  position: fixed;
  display: block;
  top: 0px;
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

export const FormPopup = styled.div`
  position: fixed;
  top: 10%;
  right: 0px;
  z-index: 500;
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

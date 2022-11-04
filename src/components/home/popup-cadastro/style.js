import styled from "styled-components";

export const InputCadastrar = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  input {
    display: block;
    margin-left: 10%;
    height: 10px;
    width: 500px;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background-color: rgb(255 255 255);
    color: #312e59;
    border-radius: 5px;
  }
`;

export const PopupContainer = styled.div`
  background-color: #312e59;
  margin: 8% auto;
  padding: 15px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "LexendDeca-Regular";
  color: rgb(255, 255, 255);
  position: fixed;
  left: 23%;
  width: 50%;

  h2 {
    font-size: 30px;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
  }
`;

export const FormCadastrar = styled.form`
  margin-left: 2em;
  margin-right: 2rem;
  align-items: center;
`;

export const PopUpCadatrar = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
`;

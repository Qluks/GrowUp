import styled from "styled-components";


export const Span = styled.span`
  font-size: 18px;
  color: #050539;
  cursor: pointer;
  line-height: 30px;
`;

export const ListaFilha = styled.li`
  margin-top: 15px;
  background-color: #dcdbe5;
  width: 550px;
  height: 115px;
  border-radius: 10px;
  box-shadow: 0px 5px 5px rgba(48, 48, 48, 0.578);
  padding-left: 25px;
  padding-top: 20px;
  color: #050539;
  cursor: default;
  line-height: 25px;
  list-style: none;
  font-size: 16px;
`;

export const ButtonIniciarAgenda = styled.button`
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

  &hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.578);
  }
`;

export const PopupRegistrar = styled.div`
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
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
  position: sticky;
  left: 23%;
  width: 50%;

  form {
    margin-left: 2em;
    margin-right: 2rem;
  }

  h3 {
    display: block;
    text-align: center;
    padding: 3px;
    font-family: 'Times New Roman', Times, serif;
    color: rgb(255, 255, 255);
    margin-top: 15px;
    font-weight: normal;
    font-size: 21px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h2 {
    display: block;
    font-family: 'Times New Roman', Times, serif;
    color: rgb(255, 255, 255);
    margin-top: 35px;
    margin-left: 42%;
    font-size: 30px;
    padding: 0px;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
`;

export const CloseModalRegistrar = styled.button`
  margin: 0;
  border: 0;
  padding: 0;
  background-color: #312e59;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-inline-start: 710px;

  svg {
    color: white;
  }
`;

export const InputRegistrar = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  input {
    display: block;
    margin-left: 10%;
    height: 50px;
    width: 500px;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background-color: rgb(255 255 255);
    color: #312e59;
    border-radius: 5px;
  }
`;

export const ButtonRegistrar = styled.div`
  text-align: center;
  

  a {
    color: white;
    text-decoration: none;
    position: relative;
  }

  button {
    background-color: #48448a;
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    max-width: min-content;
    margin-bottom: 10px;
    opacity: 0.8;
    border-radius: 5px;
    font-size: 16px;
    margin: 15px;

    &hover {
      opacity: 1;
    }
  }
`;

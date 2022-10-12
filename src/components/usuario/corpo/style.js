import styled from "styled-components";

export const Container = styled.div`
  height: 82.22px;
  width: 75%;
  background-color: #312e59;
  border-radius: 10px;
  color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 110px;
  box-shadow: 0px 5px 5px rgba(48, 48, 48, 0.578);

  h1 {
    padding-left: 3%;
    padding-top: 20px;
    font-size: 36px;
    font-weight: bold;
  }
`;

export const Selecao = styled.div`
  margin-left: 10.5%;
  padding: 40px;
  margin-bottom: 40px;

  button {
    background: #312e59;
    color: #ffffff;
    border-width: 1px;
    border-color: #ffffff;
    width: 20%;
    height: 45px;
    border-radius: 5px;
    font-size: 15px;
    font-family: "Times New Roman", Times, serif;
    float: left;
    margin-right: 15px;

    &:hover {
      background: #eeedf5;
      color: #312e59;
    }
  }
`;

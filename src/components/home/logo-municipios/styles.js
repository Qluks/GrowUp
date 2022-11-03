import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #050539;
  height: 350px;
  width: 100%;
  padding-top: 100px;
`;

export const ElementoNav = styled.div`
  height: 200px;
  width: 100%;

  img {
    width: 370px;
    float: left;
    padding-right: 200px;
    padding-left: 80px;
  }

  div {
    color: white;
    font-size: 36px;
    float: left;
    padding-top: 65px;
    font-weight: bold;
  }
`;

export const ButtonCidades = styled.div`
  padding-top: 74px;
  text-align: center;

  button {
    margin-left: 2%;
    margin-right: 2%;
    height: 76px;
    width: 15%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: none;
    font-size: 26px;
    background-color: #37327c;
    color: white;
    font-family: "Times New Roman", Times, serif;
    cursor: pointer;

    &:hover {
      color: #050539;
      background-color: #eeedf5;
    }

    &:active {
      color: #050539;
      background-color: #eeedf5;
    }
  }
`;

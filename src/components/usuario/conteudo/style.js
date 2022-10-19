import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  font-size: large;
  cursor: default;
`;

export const Tr = styled.tr`
  display: grid;
  grid-template-columns: 2fr 5fr 2fr 0.5fr;
  align-items: center;
  height: 60px;
`;

export const Th = styled.th`
  color: #050539;
  font-size: 18px;
`;

export const Informes = styled.tr`
  display: none;
  height: 150px;
  border-radius: 8.39px;
  margin-left: 30px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: rgba(14, 13, 13, 0.884);
  list-style: none;
  font-size: 15px;
  width: 1005px;
`;

export const Td = styled.td`
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 20px;
  border-radius: 8.39px;
  background-color: white;
  padding: 13px;
  color: #050539;

  textarea {
    background-color: #dcdbe570;
    cursor: no-drop;
    border-color: #bcbcbc;
    margin-left: 0px;
    border-radius: 5px;
    width: 400px;
    padding: 5px;
    height: 90px;
    margin-top: 12px;
  }

  input {
    float: left;
  }
`;

export const TdIcon = styled.td`
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 20px;
  border-radius: 8.39px;
  padding: 13px;
  color: #050539;

  img {
    height: 25px;
    width: auto;
    cursor: pointer;
  }
`;

export const DivInformes = styled.div`
  height: 150px;
  border-radius: 8.39px;
  margin-left: 30px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
  color: rgba(14, 13, 13, 0.884);
  list-style: none;
  font-size: 15px;
  width: 1005px;
`;

export const InputEnviar = styled.input`
  margin-top: 5px;
  margin-left: 0px;
  margin-bottom: 20px;
`;

export const InputData = styled.input`
  margin-top: 10px;
  cursor: no-drop;
  border-radius: 7px;
  border-width: 1px;
  border-color: #bcbcbc;
  background-color: transparent;
  height: 30px;
  width: 120px;
  margin-left: 5px;
`;

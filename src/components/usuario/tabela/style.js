import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  font-size: large;
  cursor: default;

  tr {
    display: grid;
    grid-template-columns: 2fr 5fr 2fr 0.5fr;
    align-items: center;
    height: 60px;
  }

  th {
    color: #050539;
    font-size: 18px;
  }
`;

export const Container2 = styled.div`
  height: auto;
  width: 75%;
  background-color: #dcdbe5;
  border-radius: 8.39px;
  margin-left: auto;
  margin-right: auto;
`;

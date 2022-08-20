import styled from "styled-components";
import { useState } from "react";
import Chevron from "../../assets/chevron.svg";
const DropDownButton = styled.select`
  width: 317px;
  height: 78px;
  background: none;
  border-radius: 6px;
  border: 2px solid #2b2b2b;
  padding: 0px;
  margin-top: -10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
  font-size: 40px;
  padding-left: 20px;
`;

function DropDown() {
  return (
    <DropDownButton>
      <option>Unley</option>
      <option>Test1</option>
      <option>Test2</option>
    </DropDownButton>
  );
}

export default DropDown;

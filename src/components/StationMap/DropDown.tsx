import styled from "styled-components";

const DropDownButton = styled.select`
  width: auto;
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
  font-size: 30px;
  padding-left: 20px;
`;

interface DropDownInterface {
  setDropDownValue: (value: string) => void;
  dropDownValue: string;
}

function DropDown({ dropDownValue, setDropDownValue }: DropDownInterface) {
  return (
    <DropDownButton
      value={dropDownValue}
      onChange={(event) => {
        setDropDownValue(event.target.value);
      }}
    >
      <option>Adelaide West End Precinct</option>
      <option>North Adelaide Precinct</option>
      <option>East End Precinct</option>
      <option>Grote Business Precinct</option>
      <option>Hutt Street Traders Precinct</option>
      <option>Gouger Street Traders Precinct</option>
      <option>City South Precinct</option>
      <option>Others</option>
    </DropDownButton>
  );
}

export default DropDown;

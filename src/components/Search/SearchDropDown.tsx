import styled from "styled-components";

const DropDownButton = styled.select`
  width: auto;
  height: 55px;
  background: none;
  border-radius: 6px;
  border: 2px solid white;
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  padding-left: 10px;
`;

interface DropDownInterface {
  setDropDownValue: (value: string) => void;
  dropDownValue: string;
}
const SearchDropDown = ({
  dropDownValue,
  setDropDownValue,
}: DropDownInterface) => {
  return (
    <DropDownButton
      value={dropDownValue}
      onChange={(event) => {
        setDropDownValue(event.target.value);
      }}
    >
      <option></option>
      <option>Cafe Owner</option>
    </DropDownButton>
  );
};

export default SearchDropDown;

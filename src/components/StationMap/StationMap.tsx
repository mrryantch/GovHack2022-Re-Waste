import styled from "styled-components";
import { useState } from "react";
import DropDown from "./DropDown";

const StationMapContainer = styled.div`
  background-color: white;
  height: 50.75rem;
  color: black;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  padding-left: 10.125rem;
  padding-right: 10.125rem;
`;
const Box1 = styled.div`
  width: 100%;
`;

const Box2 = styled.div`
  width: 100%;
  padding-top: 9.5rem;
  padding-bottom: 6.938rem;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.438rem;
  display: flex;
  flex-direction: row;
`;
const TitleGreen = styled.p`
  font-weight: 700;
  font-size: 2.5rem;
  color: #2aa92a;
  margin: 0;
`;

const Paragraph = styled.p`
  margin-top: 7.375rem;
  width: 36.688rem;
  height: 13.75rem;
  font-size: 2rem;
  font-weight: 400;
`;

const SubParagraph = styled.p`
  font-size: 1.5rem;
  margin: 0rem;
  font-weight: 700;
`;

const MapContainer = styled.div`
  border: 1px solid red;
  height: 29.938rem;
`;

const StationMap = () => {
  return (
    <StationMapContainer>
      <Box1>
        <Title>
          re:&nbsp;<TitleGreen>yourwaste&nbsp;</TitleGreen> in&nbsp;{" "}
          <DropDown />
        </Title>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus est
          adipiscing cras habitant. Metus nulla id eget nunc. Aliquet nunc
          neque, egestas consectetur maecenas.
        </Paragraph>

        <SubParagraph>Hours</SubParagraph>
        <SubParagraph>Location</SubParagraph>
        <SubParagraph>Service</SubParagraph>
      </Box1>
      <Box2>
        <MapContainer>test</MapContainer>
      </Box2>
    </StationMapContainer>
  );
};

export default StationMap;

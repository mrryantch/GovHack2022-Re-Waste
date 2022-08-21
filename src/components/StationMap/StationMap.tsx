import styled from "styled-components";
import DropDown from "./DropDown";
import Map from "./Map";
import { useState } from "react";
import { GREEN } from "../../constants/styles";

const StationMapContainer = styled.div`
  height: 45rem;
  color: black;
  display: flex;
  flex-direction: column;
  padding-left: 7rem;
  padding-right: 7rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    font-size: 12px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;

  }
`;
const Box1 = styled.div`
  width: 100%;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Box2 = styled.div`
  width: 100%;
  padding-bottom: 6.938rem;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.438rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    flex-direction: column;
  }
`;
const TitleGreen = styled.p`
  font-weight: 700;
  font-size: 2.5rem;
  color: ${GREEN};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  width: 36.688rem;
  height: 13.75rem;
  font-size: 2rem;
  font-weight: 400;
  margin-top: 4rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 0;
    height: auto;
  }
`;

const SubParagraph = styled.p`
  font-size: 1.5rem;
  margin: 0rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const MapContainer = styled.div`
  height: 29.938rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    height: 26rem;
  }
`;

const StationMap = () => {
  const [title, setTitle] = useState("Click on Map OR Select a Precinct");
  const [dropDownValue, setDropDownValue] = useState(
    "Adelaide West End Precinct"
  );
  const markers: google.maps.Marker[] = [];

  return (
    <StationMapContainer>
      <Title>
        <div style={{display: 'flex'}}>re:<TitleGreen>yourwaste&nbsp;</TitleGreen> in&nbsp;{" "}</div>
        <DropDown
          dropDownValue={dropDownValue}
          setDropDownValue={setDropDownValue}
        />
      </Title>

      <InnerContainer>
        <Box1>
          <Paragraph>{title}</Paragraph>
          <SubParagraph>Hours</SubParagraph>
          <SubParagraph>Location</SubParagraph>
          <SubParagraph>Service</SubParagraph>
        </Box1>
        <Box2>
          <MapContainer>
            <Map
              markers={markers}
              dropDownValue={dropDownValue}
              setTitle={setTitle}
            />
          </MapContainer>
        </Box2>
      </InnerContainer>
    </StationMapContainer>
  );
};

export default StationMap;

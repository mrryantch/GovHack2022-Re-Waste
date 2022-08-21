import styled from "styled-components";
import DropDown from "./DropDown";
import Map from "./Map";
import { useState } from "react";

const StationMapContainer = styled.div`
  height: 45rem;
  color: black;
  display: flex;
  flex-direction: column;
  padding-left: 7rem;
  padding-right: 7rem;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Box1 = styled.div`
  width: 100%;
  padding: 2rem;
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
`;
const TitleGreen = styled.p`
  font-weight: 700;
  font-size: 2.5rem;
  color: #2aa92a;
  margin: 0;
`;

const Paragraph = styled.p`
  width: 36.688rem;
  height: 13.75rem;
  font-size: 2rem;
  font-weight: 400;
  margin-top: 4rem;
`;

const SubParagraph = styled.p`
  font-size: 1.5rem;
  margin: 0rem;
  font-weight: 700;
`;

const MapContainer = styled.div`
  height: 29.938rem;
  margin-top: 2rem;
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
        re:<TitleGreen>yourwaste&nbsp;</TitleGreen> in&nbsp;{" "}
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

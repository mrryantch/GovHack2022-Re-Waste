import React from "react";
import styled from "styled-components";
import { GreenSpan, HeaderText } from "./common/text";
import StationMap from "./StationMap/StationMap";
import Footer from "./common/Footer";
import { Header } from "./common/Header";

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
const InfoContainer = styled.div`
  padding: 3rem 7rem;
`;
const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ParagraphText = styled.div`
  width: 100%;
  line-height: 1.5rem;
  font-size: 2rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const LandingPage = () => {
  return (
    <Container>
      <Header />
      <img
        src="/noah-buscher-x8ZStukS2PM-unsplash.jpg"
        alt="landingImg"
        height="500px"
        width="100%"
      ></img>
      <InfoContainer>
        <HeaderText>
          re:<GreenSpan>yourwaste</GreenSpan>
        </HeaderText>
        <ParagraphText>Recent Activities</ParagraphText>
        <ImagesContainer>
          <img
            src="/noah-buscher-x8ZStukS2PM-unsplash.jpg"
            alt="landingImg"
            height="400px"
            width="500px"
          ></img>
          <img
            src="/noah-buscher-x8ZStukS2PM-unsplash.jpg"
            alt="landingImg"
            height="400px"
            width="500px"
          ></img>
          <img
            src="/noah-buscher-x8ZStukS2PM-unsplash.jpg"
            alt="landingImg"
            height="400px"
            width="500px"
          ></img>
        </ImagesContainer>
      </InfoContainer>
      <StationMap />
      <Footer />
    </Container>
  );
};

export default LandingPage;

import React from "react";
import styled from "styled-components";
import { GreenSpan, HeaderText } from "./common/text";
import StationMap from "./StationMap/StationMap";
import Footer from "./common/Footer";
import { Header } from "./common/Header";

const Container = styled.div`
  border: 1px solid red;
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
  padding: 3rem 8rem;
`;
const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ParagraphText = styled.div`
  width: 500px;
  line-height: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 5rem;
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
        <ParagraphText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus est
          adipiscing cras habitant. Metus nulla id eget nunc. Aliquet nunc
          neque, egestas consectetur maecenas.{" "}
        </ParagraphText>
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

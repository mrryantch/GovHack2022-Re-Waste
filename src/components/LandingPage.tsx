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

  @media (max-width: 768px) {
    padding: 2rem;
    }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  img {
    height: 400px;
    width: 500px;

    @media (max-width: 768px) {
        height: 200px;
        width: 300px;
        margin-bottom: 1rem;
     }
  }
`;

const ParagraphText = styled.div`
  width: 100%;
  line-height: 1.5rem;
  font-size: 1.5rem;
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
        style={{objectFit: 'cover'}}
      ></img>
      <InfoContainer>
        <HeaderText>
          re:<GreenSpan>yourwaste</GreenSpan>
        </HeaderText>
        <ParagraphText>Recent Activities</ParagraphText>
        <ImagesContainer>
          <img
            src="/Images/recycle.jpg"
            alt="landingImg1"
          ></img>
          <img
            src="/Images/farming.jpg"
            alt="landingImg2"
          ></img>
          <img
            src="/Images/event.jpg"
            alt="landingImg3"
          ></img>
        </ImagesContainer>
      </InfoContainer>
      <StationMap />
      <Footer />
    </Container>
  );
};

export default LandingPage;

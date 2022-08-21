import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GreenSpan, HeaderText } from "./common/text";
import StationMap from "./StationMap/StationMap";
import Footer from "./common/Footer";
import { Header } from "./common/Header";
import SearchDropDown from "./Search/SearchDropDown";
import FoodImage from "./Search/FoodImage";

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

const HeaderImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const HeaderImageText = styled.p`
  position: absolute;
  z-index: 10;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  top: 40%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: auto;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    top: 10%;
  }
`;

const Slider = styled.div`
  position: absolute;
  z-index: 10;
  top: 68%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 687px;
  height: 110px;
  background: #2b2b2b;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 300px;
    height: auto;
    flex-direction: column;
    top: 65%;
  }
`;
const LandingPage = () => {
  const [businessRole, setBusinessRoleValue] = useState("");
  const [openSlider, setOpenSlider] = useState(true);
  useEffect(() => {
    if (businessRole !== "") {
      setOpenSlider(!openSlider);
    } else {
      setOpenSlider(false);
    }
  }, [businessRole]);

  return (
    <Container>
      <Header />

      <HeaderImageContainer>
        <HeaderImageText>
          I am a &nbsp;
          <SearchDropDown
            dropDownValue={businessRole}
            setDropDownValue={setBusinessRoleValue}
          />
        </HeaderImageText>
        {openSlider && (
          <Slider>
            <FoodImage text="coffee cups" src="/Images/coffee.svg" />
            <FoodImage text="organic waste" src="/Images/apple.svg" />
            <FoodImage text="general waste" src="/Images/trashbin.svg" />
          </Slider>
        )}
        <img
          src="/noah-buscher-x8ZStukS2PM-unsplash.jpg"
          alt="landingImg"
          height="500px"
          width="100%"
          style={{ objectFit: "cover" }}
        ></img>
      </HeaderImageContainer>

      <InfoContainer>
        <HeaderText>
          re:<GreenSpan>yourwaste</GreenSpan>
        </HeaderText>
        <ParagraphText>Recent Activities</ParagraphText>
        <ImagesContainer>
          <img src="/Images/recycle.jpg" alt="landingImg1"></img>
          <img src="/Images/farming.jpg" alt="landingImg2"></img>
          <img src="/Images/event.jpg" alt="landingImg3"></img>
        </ImagesContainer>
      </InfoContainer>
      <StationMap />
      <Footer />
    </Container>
  );
};

export default LandingPage;

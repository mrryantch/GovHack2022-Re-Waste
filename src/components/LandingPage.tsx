import React from 'react';
import styled from 'styled-components';
import { LinkButton, PrimaryButton } from './common/buttons';
import { GreenSpan, HeaderText } from './common/text';
import { useNavigate } from "react-router-dom";

const NavContainer = styled.div`
display: flex;
justify-content:space-between;
padding: 1rem 4rem;
`

const InfoContainer = styled.div`
padding: 3rem 8rem;
`
const ImagesContainer = styled.div`
display: flex;
justify-content: space-between;
`

const ParagraphText = styled.div`
width: 500px;
line-height: 1.5rem;
padding-top: 1rem;
padding-bottom: 5rem;
`
const Header = () => {
    const navigate = useNavigate();
 
    const onDashboardClick = () => {
        if (window.sessionStorage.getItem("user")) {
            navigate('/dashboard')
        } else {
            navigate('/login')
        }
    }

    return <NavContainer>
        <HeaderText>re:<GreenSpan>waste</GreenSpan></HeaderText>
        <div style={{ paddingTop: '1.5rem' }}>
            <LinkButton href="#">Link1</LinkButton>
            <LinkButton href="#">Link2</LinkButton>
            <LinkButton href="#">Link3</LinkButton>
            <LinkButton href="#">Link4</LinkButton>
            <PrimaryButton onClick={onDashboardClick}>Find a recycling plant</PrimaryButton>
        </div>
    </NavContainer>
}


const LandingPage = () => {
    return <>
        <Header />
        <img src='/noah-buscher-x8ZStukS2PM-unsplash.jpg' alt='landingImg' height='500px' width='100%'></img>
        <InfoContainer>
            <HeaderText>re:<GreenSpan>yourwaste</GreenSpan></HeaderText>
            <ParagraphText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus est adipiscing cras habitant. Metus nulla id eget nunc. Aliquet nunc neque, egestas consectetur maecenas. </ParagraphText>
            <ImagesContainer>
            <img src='/noah-buscher-x8ZStukS2PM-unsplash.jpg' alt='landingImg' height='400px' width='450px'></img>
            <img src='/noah-buscher-x8ZStukS2PM-unsplash.jpg' alt='landingImg' height='400px' width='450px'></img>
            <img src='/noah-buscher-x8ZStukS2PM-unsplash.jpg' alt='landingImg' height='400px' width='450px'></img>
            </ImagesContainer>
        </InfoContainer>
    </>
}

export default LandingPage
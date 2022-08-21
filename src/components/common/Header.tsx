import React from 'react';
import styled from 'styled-components';
import { LinkButton, PrimaryButton } from './buttons';
import { useNavigate } from "react-router-dom";
import { GreenSpan, HeaderText } from './text';

const NavContainer = styled.div`
display: flex;
justify-content:space-between;
padding: 1rem 4rem;
`

export const Header = () => {
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
            <LinkButton href="/">HomePage</LinkButton>
            <PrimaryButton onClick={onDashboardClick}>Dashboard</PrimaryButton>
        </div>
    </NavContainer>
}
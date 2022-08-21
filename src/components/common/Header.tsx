import React from "react";
import styled from "styled-components";
import { LinkButton, PrimaryButton } from "./buttons";
import { useNavigate } from "react-router-dom";
import { GreenSpan, HeaderText } from "./text";
import { BLACK, GREEN } from "../../constants/styles";
import { LanguageType } from "../../constants/types";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 7rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
}
`

const ButtonsContainer = styled.div`
    display: flex;
    padding-top: 1.5rem;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const MultiLingualSelect = styled.div`
    display: flex;
    padding-left: 2rem;
    @media (max-width: 768px) {
        padding: 1rem 0;
    }
    justify-content: center;
    align-items: center;
`

interface LanguageOptionProps {
    selected?: boolean;
}

const LanguageOption = styled.span<LanguageOptionProps>`
    padding: 0 0.5rem;
    color: ${props => props.selected ? GREEN : BLACK};

    &:hover {
        cursor: pointer;
        color: ${GREEN};
        opcacity: 0.8;
    }

`

interface HeaderProps {
    language?: number;
    setLanguage?: (language: number) => void
}

export const Header = (props: HeaderProps) => {
    const navigate = useNavigate();
    const { language, setLanguage } = props;

    const onDashboardClick = () => {
        if (window.sessionStorage.getItem("user")) {
            navigate("/dashboard");
        } else {
            navigate("/login");
        }
    };

    return (
        <NavContainer>
            <HeaderText>
                re:<GreenSpan>waste</GreenSpan>
            </HeaderText>
            <ButtonsContainer>
                <LinkButton href="/code-entry">Dispose Your Waste</LinkButton>
                <LinkButton href="/">Home Page</LinkButton>
                <PrimaryButton onClick={onDashboardClick} style={{ maxHeight: '2rem' }}>Dashboard</PrimaryButton>
                <MultiLingualSelect>
                    <LanguageOption selected={language === LanguageType.English} onClick={() => setLanguage && setLanguage(LanguageType.English)}>English</LanguageOption> | 
                    <LanguageOption selected={language === LanguageType.Chinese} onClick={() => setLanguage && setLanguage(LanguageType.Chinese)}>简体中文</LanguageOption>
                </MultiLingualSelect>
            </ButtonsContainer>
        </NavContainer>
    );
};

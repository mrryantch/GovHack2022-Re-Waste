import React from "react";
import styled from "styled-components";
import { LinkButton, PrimaryButton } from "./buttons";
import { useNavigate } from "react-router-dom";
import { GreenSpan, HeaderText } from "./text";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 7rem;
`;

export const Header = () => {
  const navigate = useNavigate();

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
      <div style={{ paddingTop: "1.5rem" }}>
        <LinkButton href="#">reduce</LinkButton>
        <LinkButton href="#">reuse</LinkButton>
        <LinkButton href="#">recycle</LinkButton>
        <LinkButton href="#">reimagine</LinkButton>
        <PrimaryButton onClick={onDashboardClick}>Dashboard</PrimaryButton>
      </div>
    </NavContainer>
  );
};

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
        <LinkButton href="/code-entry">Dispose Your Waste</LinkButton>
        <LinkButton href="/">Home Page</LinkButton>
        <PrimaryButton onClick={onDashboardClick}>Dashboard</PrimaryButton>
        {/* <div>
            <span>English</span> | <span>Chinese</span>
        </div> */}
      </div>
    </NavContainer>
  );
};

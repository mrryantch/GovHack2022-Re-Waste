import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BLACK, WHITE } from "../constants/styles"
import { PrimaryButton } from "./common/buttons"
import { Row } from "./common/layout"


const LogInContainer = styled.div`
    background: ${BLACK};
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: ${WHITE};
`

const LogInFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
`

const SpanContainer = styled.span`
    width: 280px;
    line-height: 1.5rem;
    text-align: center;
    margin-bottom: 16px;
`

const InputBox = styled.input`
    width: 280px;
    height: 28px;
    margin-bottom: 10px;
    background: grey;
    color: ${WHITE};

    ::placeholder { 
        color: ${WHITE};
        opacity: 1; 
        text-align: center;
        font-weight: 18px;
    }
`
const LogInPrimaryButton = styled(PrimaryButton)`
    width: 290px;
    height: 36px;
`

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    font-size: 12px;
`

const LogIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const onLogInClicked = () => {
        window.sessionStorage.setItem("user", email)
        navigate('/dashboard')
    }
    return <LogInContainer>
        <LogInFormContainer>
            <h2>re:yourwaste</h2>
            <SpanContainer>Please enter your email and password to proceed</SpanContainer>
            <SpanContainer style={{width: '300px'}}>(For demo purpose any email and password will work)</SpanContainer>
            <InputBox placeholder="enter your email" value={email} onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setEmail(e.currentTarget.value)
            }}></InputBox>
            <InputBox placeholder="enter your password" type="password"></InputBox>
            <LogInPrimaryButton onClick={onLogInClicked}>Log in</LogInPrimaryButton>
        </LogInFormContainer>
        <Footer>
            <Row>
                <span style={{ paddingBottom: '4px' }}>SPONSORED BY</span>
                <img src="/COA_LOGO.png" width='120px' alt='COA_LOGO'></img>
            </Row>

            <span>Privacy Policy • Terms &#38; Conditions</span>
            <span>All rights reserved © re:waste 2022</span>
        </Footer>
    </LogInContainer>
}

export default LogIn
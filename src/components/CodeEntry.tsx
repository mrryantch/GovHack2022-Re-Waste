import { useState } from "react"
import styled from "styled-components"
import { BLACK, GREEN, WHITE } from "../constants/styles"
import { PrimaryButton } from "./common/buttons"
import { Header } from "./common/Header"
import { Row } from "./common/layout"


const CodeEntryContainer = styled.div`
    background: ${GREEN};
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: ${WHITE};
`

const EntryFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
`

const SpanContainer = styled.span`
    width: 340px;
    line-height: 1.5rem;
    text-align: center;
    margin-bottom: 16px;
`

const InputBox = styled.input`
    width: 280px;
    height: 28px;
    margin-bottom: 10px;

    ::placeholder { 
        opacity: 1; 
        text-align: center;
        font-weight: 18px;
    }
`
const SubmitButton = styled(PrimaryButton)`
    background: ${BLACK};
    width: 290px;
    height: 36px;
`

const UpdateMsg = styled.div`
    margin-top: 1rem;
    color: ${BLACK};
    opacity: 0.9;
    text-align: center;
    font-weight: 700;
`

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    font-size: 12px;
    background: ${BLACK};

    @media (max-width: 768px) {
        padding: 12px;
        font-size: 11px;
    }

    img {

        @media (max-width: 768px) {
            width: 80px;
        }
    }
`

const CodeEntry = () => {
    const [showUpdatedMsg, setShowUpdatedMsg] = useState(false)
    const onSubmitClicked = () => {
        setShowUpdatedMsg(true);
    }
    return (
    <>
        <Header />
        <CodeEntryContainer>
            <EntryFormContainer>
                <h2>re:yourwaste</h2>
                <SpanContainer>Please enter the code attached on the bin and your unique code (ABN). The weight of waste will be captured by the sensor and linked to your account automatically</SpanContainer>
                <InputBox placeholder="enter the bin code"></InputBox>
                <InputBox placeholder="enter your ABN"></InputBox>
                <SubmitButton onClick={onSubmitClicked}>Submit</SubmitButton>
                {showUpdatedMsg && <UpdateMsg>You have successfully dumped and recyled 3.5 kg of waste!</UpdateMsg>}
            </EntryFormContainer>
            <Footer>
                <Row>
                    <span style={{ paddingBottom: '4px' }}>SPONSORED BY</span>
                    <img src="/COA_LOGO.png" width='120px' alt='COA_LOGO'></img>
                </Row>

                <span>Privacy Policy • Terms &#38; Conditions</span>
                <span>All rights reserved © re:waste 2022</span>
            </Footer>
        </CodeEntryContainer>
    </>)
}

export default CodeEntry
import { useState } from "react"
import styled from "styled-components"
import { BLACK, GREEN, WHITE } from "../constants/styles"
import { LanguageType } from "../constants/types"
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

const LanguageCopy = [
    {
        helpInfo: 'Please enter the code attached on the bin and your unique code (ABN). The weight of waste will be captured by the sensor and linked to your account automatically',
        binCodeHint: 'enter the bin code',
        ABNHint: 'enter your ABN',
        submit: 'Submit',
        updateMessage: 'You have successfully dumped and recyled 3.5 kg of waste!'
    },
    {
        helpInfo: '请输入附在垃圾箱上的识别码以及您的ABN。垃圾桶上的检测芯片会自动记录您所扔垃圾的重量，并关联到您的账号',
        binCodeHint: '输入垃圾箱的识别码',
        ABNHint: '输入ABN',
        submit: '提交',
        updateMessage: '您已成功新回收3.5公斤废品！'
    }
]

const CodeEntry = () => {
    const [showUpdatedMsg, setShowUpdatedMsg] = useState(false)
    const [language, setLanguage] = useState(LanguageType.English)
    const onSubmitClicked = () => {
        setShowUpdatedMsg(true);
    }
    return (
    <>
        <Header setLanguage={setLanguage}/>
        <CodeEntryContainer>
            <EntryFormContainer>
                <h2>re:yourwaste</h2>
                <SpanContainer>{LanguageCopy[language].helpInfo}</SpanContainer>
                <InputBox placeholder={LanguageCopy[language].binCodeHint}></InputBox>
                <InputBox placeholder={LanguageCopy[language].ABNHint}></InputBox>
                <SubmitButton onClick={onSubmitClicked}>{LanguageCopy[language].submit}</SubmitButton>
                {showUpdatedMsg && <UpdateMsg>{LanguageCopy[language].updateMessage}</UpdateMsg>}
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
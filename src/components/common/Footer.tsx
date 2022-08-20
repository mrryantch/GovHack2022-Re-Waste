import { useState } from "react"
import styled from "styled-components"
import { BLACK, GREEN, WHITE } from "../../constants/styles"
import { PrimaryButton } from "./buttons"
import { Column, Row } from "./layout"

const FooterContainer = styled.div`
    height: 250px;
    width: 100vw;
    background: ${BLACK};
    color: ${WHITE};
    padding: 2rem 4rem;
    display: flex;
`

const HeaderSpan = styled.span`
    font-size: 12px;
`
const ContentSpan = styled.span`
    font-size: 20px;
    font-weight: 700;
    margin-right: 2rem;
`
const CustomRow = styled(Row)`
    margin-bottom: 2rem;
`

const InputBox = styled.input`
    width: 280px;
    height: 28px;
    margin: 10px 0;

    ::placeholder { 
        color: grey;
        opacity: 1; 
        text-align: center;
        font-weight: 18px;
    }
`

const Footer = () => {
    const [showEmailMsg, setShowEmailMsg] = useState(false)

    const onSubscribeClicked = () => {
        setShowEmailMsg(true)
    }

    return <FooterContainer>
        <div style={{ paddingRight: '38rem' }}>
            <CustomRow>
                <HeaderSpan style={{ paddingBottom: '4px' }}>SPONSORED BY</HeaderSpan>
                <Column style={{ alignItems: 'center' }}>
                    <img src="/COA_LOGO.png" width='120px' style={{ marginRight: '2rem' }} alt='COA_LOGO'></img>
                    <ContentSpan>
                        re:waste
                    </ContentSpan>
                </Column>
            </CustomRow>

            <CustomRow>
                <HeaderSpan style={{ paddingBottom: '4px' }}>CONNECT WITH US</HeaderSpan>
                <Column>
                    <ContentSpan>
                        facebook
                    </ContentSpan>
                    <ContentSpan>
                        twitter
                    </ContentSpan>
                    <ContentSpan>
                        instagram
                    </ContentSpan>
                </Column>
            </CustomRow>
            <CustomRow>
                <HeaderSpan style={{ paddingBottom: '4px' }}>CONTACT</HeaderSpan>
                <ContentSpan>
                    +123 456 789
                </ContentSpan>
            </CustomRow>
            <HeaderSpan>All rights reserved © re:waste 2022</HeaderSpan>
        </div>
        <div>
            <CustomRow>
                <HeaderSpan style={{ paddingBottom: '4px' }}>SIGN UP FOR EMAIL UPDATES</HeaderSpan>
                <InputBox placeholder="Enter email here" />
                {showEmailMsg && <span style={{ marginBottom: '10px', color: GREEN }}>You have successully subscribed to our latest news!</span>}
                <PrimaryButton style={{ width: "120px" }} onClick={onSubscribeClicked}>Submit</PrimaryButton>
            </CustomRow>
        </div>
    </FooterContainer>
}

export default Footer
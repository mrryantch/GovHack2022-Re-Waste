import { useState } from "react"
import styled from "styled-components"
import { GREEN, WHITE } from "../constants/styles"
import Footer from "./common/Footer"
import { Header } from "./common/Header"
import { Row } from "./common/layout"
import { HeaderText } from "./common/text"

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 4rem;
    border-top: 3px solid ${GREEN};
 `

const ItemsContainer = styled.div`
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
 `

const SummaryContainer = styled.div`
    display: flex;
    margin-top: 0.5rem;
 `


interface ListitemProps {
    label: string;
    value: string;
}

const ListLabel = styled.span`
    font-weight: 700;
    margin: 0.5rem 0;
    font-weight: 18px;
`
const ListItem = (props: ListitemProps) => {
    return <Row style={{ minWidth: '300px' }}>
        <ListLabel >{props.label}</ListLabel>
        <span>{props.value}</span>
    </Row>
}

const Menu = styled.ul`
    background: ${GREEN};
    width: 25%;
    text-align: center;
    height: 20rem;
    margin: 0;
    display:table-cell;
    vertical-align: middle;
    padding: 2rem 0;
`

interface MenuItemProps {
    selected: boolean;
}

const MenuItem = styled.li<MenuItemProps>`
    color: ${WHITE};
    list-style: none;
    font-size: 20px;
    padding: 10px 0;
    font-weight: ${props => props.selected ? "700" : "normal"};
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

const menuList = ['Week', 'Month', 'Quarter', 'Year']

const Dashboard = () => {
    const [menuIndex, setMenuIndex] = useState(0);
    return <>
        <Header />
        <ProfileContainer>
            <HeaderText style={{ color: GREEN }}>Profile</HeaderText>
            <ItemsContainer>
                <ListItem label='Business Name' value='PwC' />
                <ListItem label='ABN' value='00 000 000 000' />
                <ListItem label='Business Address' value='Level 6, 60 Rundle Street, Adelaide 5000' />
            </ItemsContainer>
        </ProfileContainer>
        <SummaryContainer>
            <Menu>
                {menuList.map((item, index) =>
                    <MenuItem
                        selected={index === menuIndex}
                        onClick={() => setMenuIndex(index)}>
                        {item}
                    </MenuItem>)}
            </Menu>
            <div style={{ background: '#F3F3F3', width: '75%', padding: '2rem 0' }}>
                <div style={{ borderRight: '1px solid black', width: '50%', height: '20rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div>Current {menuList[menuIndex].toLowerCase()} you have dumped:</div>
                    <div>recycle</div>
                    <div>organics</div>
                    <div>landfill</div>
                </div>
            </div>
        </SummaryContainer>
        <Footer />
    </>
}

export default Dashboard
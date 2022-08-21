import { useState } from "react"
import styled from "styled-components"
import { BLACK, GREEN, WHITE } from "../constants/styles"
import { BinType, wasteDataSample } from "../mock/waste-table"
import Footer from "./common/Footer"
import { Header } from "./common/Header"
import { Row } from "./common/layout"
import { HeaderText } from "./common/text"

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 4rem;
    border-top: 3px solid ${GREEN};

    @media (max-width: 768px) {
        padding: 1.5rem;
      }
 `

const ItemsContainer = styled.div`
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
 `

const SummaryContainer = styled.div`
    display: flex;
    margin-top: 0.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
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
    padding: 5rem 0 0 0;


    @media (max-width: 768px) {
        width: 100%;
        padding: 0;
        height: auto;
    }
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

const RightContainer = styled.div`
    background: #F3F3F3;
    width: 75%;
    padding: 2rem 0;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`

interface SummaryDataContainerProps {
    border?: boolean;
}

const SummaryDataContainer = styled.div<SummaryDataContainerProps>`
    border-right: ${props => props.border ? `1px solid ${BLACK}` : "none"};
    width: 50%; 
    height: 20rem; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;

    @media (max-width: 768px) {
        width: 100%;
        border-bottom: ${props => props.border ? `1px solid ${BLACK}` : "none"};
        border-right: none;
    }
`

const Title = styled.p`
    font-size: 1.6rem;  
    font-weight: 700;
    text-align: center;
`
const WeightDataContain = styled.div`
    padding: 0.5rem;
    color: ${BLACK};
    font-size: 1.3rem; 
`

const EqualIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid ${GREEN};
    line-height:50px;
    text-align:center;
    font-size: 30px;
    color: ${WHITE};
    background: ${GREEN};
`

const PointBalance = styled.div`
    font-weight: 800;
    font-size: 3rem;
    margin-top: 1rem;
`
const menuList = ['Week', 'Month', 'Quarter', 'Year']

const Dashboard = () => {
    const [menuIndex, setMenuIndex] = useState(0);

    const getWeightData = (binType: any) => {
        const now = new Date()
        const timeFilter = [
            (recordTime: Date) => (now.getDay() - recordTime.getDay()) <= 7 && (now.getMonth() - recordTime.getMonth()) <= 1,
            (recordTime: Date) => (now.getMonth() - recordTime.getMonth()) <= 1,
            (recordTime: Date) => (now.getMonth() - recordTime.getMonth()) <= 3,
            (recordTime: Date) => (now.getFullYear() - recordTime.getFullYear()) <= 1,
        ]
        const data = wasteDataSample.filter(record => record.type === binType && timeFilter[menuIndex](record.date))

        return data.map(item => item.amount).reduce((prev, next) => prev + next).toFixed(2)
    }

    const getBillPoint = () => {
        return Number(getWeightData(BinType.ORGANICS)) * 0.8 + Number(getWeightData(BinType.RECYELE)) * 0.9 + Number(getWeightData(BinType.LANDFILL)) * 0.2
    }

    return <>
        <Header />
        <ProfileContainer>
            <HeaderText style={{ color: GREEN }}>Profile</HeaderText>
            <ItemsContainer>
                <ListItem label='Business Name' value='Company A' />
                <ListItem label='ABN' value='00 000 000 000' />
                <ListItem label='Business Address' value='Level 6, 60 Rundle Street, Adelaide 5000' />
            </ItemsContainer>
        </ProfileContainer>
        <SummaryContainer>
            <Menu>
                {menuList.map((item, index) =>
                    <MenuItem
                        key={index}
                        selected={index === menuIndex}
                        onClick={() => setMenuIndex(index)}>
                        {item}
                    </MenuItem>)}
            </Menu>
            <RightContainer>
                <SummaryDataContainer border>
                    <Title>Current {menuList[menuIndex].toLowerCase()} you have recycled waste:</Title>
                    <WeightDataContain>
                        {getWeightData(BinType.RECYELE)} kg in <span style={{color: '#eee451', fontWeight: 700}}>recycle bin</span>
                    </WeightDataContain>
                    <WeightDataContain>
                        {getWeightData(BinType.ORGANICS)} kg in <span style={{color: GREEN, fontWeight: 700}}>organics bin</span>
                    </WeightDataContain>
                    <WeightDataContain>
                        {getWeightData(BinType.LANDFILL)} kg in <span style={{color: '#C00000', fontWeight: 700}}>landfill bin</span>
                    </WeightDataContain>
                </SummaryDataContainer>
                <SummaryDataContainer>
                    <EqualIcon>&#8776;</EqualIcon>
                    <PointBalance>${getBillPoint()}</PointBalance>
                    <div>(the equal amount of electribity bill that you can redeem)</div>
                </SummaryDataContainer>
            </RightContainer>
        </SummaryContainer>
        <Footer />
    </>
}

export default Dashboard
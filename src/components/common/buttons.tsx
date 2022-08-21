import styled from 'styled-components'
import { GREEN, WHITE } from '../../constants/styles'


export const PrimaryButton = styled.button`
padding: 0.8rem 2rem;
left: 1135px;
border-radius: 5px;
height: 2rem;
line-height: 0.8rem;
background: ${GREEN};
color: ${WHITE};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border: none;
font-weight: 700;

&:hover {
    cursor: pointer;
    opacity: 0.8;
}
`

export const LinkButton = styled.a`
padding: 1.5rem;
font-weight: 700;
font-size: 18px;
line-height: 33px;
color: #2B2B2B;
text-decoration: none;

&:hover {
    color:${GREEN}
}

@media (max-width: 768px) {
    line-height: 10px;
    padding: 1rem;
}
`
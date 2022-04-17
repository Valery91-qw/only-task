import styled from "styled-components";

const Label = styled.span<{type?: string}>`
order: ${props => props.type === 'checkbox' ? 1 : 0};  
margin-bottom: ${props => props.type === 'checkbox' ? '0px' : '10px'};
margin-left: ${props => props.type === 'checkbox' ? '20px' : '0px'};  
font-size: 16px;
font-weight: 400;
line-height: 19px;  
color: #1F1F1F;  
`

export default Label;
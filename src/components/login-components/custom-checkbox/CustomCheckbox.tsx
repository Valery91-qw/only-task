import styled from "styled-components";
import Label from "../custom-input/Label";
import React from "react";
import ICustomCheckbox from "./CustomCheckbox.interface";
import CheckboxWrapper from "./CheckboxWrapper";

const StyledCheckbox = styled.input`
 appearance: none;
 position: relative; 
  
 width: 20px;
 height: 20px;
  
 border-radius: 4px;
 border: 1px solid #000000;
  
 &:checked:after {
   position: absolute;
   content: ' ';
   
   width: 14px;
   height: 14px;
   left: 50%;
   top: 50%;
   
   transform: translate(-50%,-50%);
   background-color: #4A67FF;
   border-radius: 2px;
 } 
`

const CustomCheckbox: React.FC<ICustomCheckbox> = ({displayedText, ...restProps}) => {
    return (
        <CheckboxWrapper>
            <StyledCheckbox type={restProps.type}/>
            <Label type={restProps.type}>{displayedText}</Label>
        </CheckboxWrapper>
    )
}

export default CustomCheckbox;
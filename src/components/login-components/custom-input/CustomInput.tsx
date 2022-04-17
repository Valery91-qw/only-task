import styled from "styled-components";
import React from "react";
import Label from "./Label";
import ICustomInput from "./CustomInput.interface";

const StyledInput = styled.input`
  margin-bottom: 20px;
  padding: 20px;
  color: #232323;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border-radius: 8px;
  background-color: #F5F5F5;
  border: none;
`

const CustomInput: React.FC<ICustomInput> = (
    {displayedText, ...restProp}
) => {
    return (
        <>
            <Label type={restProp.type}>{displayedText}</Label>
            <StyledInput {...restProp} />
        </>
    )
}

export default CustomInput;
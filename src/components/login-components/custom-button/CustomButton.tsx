import styled from "styled-components";
import React from "react";
import ICustomButton from "./CustomButton.interface";

const StyledButton = styled.button`
  padding: 20px 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: #FFFFFF;
  background-color: #4A67FF;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:disabled {
    background-color: #99A9FF;
    cursor: wait;
  }
`

const CustomButton: React.FC<ICustomButton> = (
    {children, isLoad, ...rest}
) => {
    return (
        <StyledButton type='submit' disabled={isLoad} {...rest}>
            {children}
        </StyledButton>
    )
}

export default CustomButton
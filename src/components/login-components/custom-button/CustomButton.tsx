import styled from "styled-components";
import React from "react";

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
`

const CustomButton: React.FC<{children: React.ReactNode}> = (
    {children}
) => {
    return (
        <StyledButton type='submit'>
            {children}
        </StyledButton>
    )
}

export default CustomButton
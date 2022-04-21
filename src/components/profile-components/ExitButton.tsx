import styled from "styled-components";
import React from "react";

const Button = styled.button`
  padding: 20px 70px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  background-color: #F5F5F5;
  border: none;
  cursor: pointer;
`

const ExitButton: React.FC<{onClick: () => void }> = ({onClick}) => {
    return (
        <Button onClick={onClick}>
            Выйти
        </Button>
    )
}
export default ExitButton;
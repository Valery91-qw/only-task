import styled from "styled-components";
import React, {useEffect} from "react";

const StyledErrorField = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  padding: 20px;
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  background-color: #F5E9E9;
  border: 1px solid #E26F6F;
  border-radius: 8px;

  &:before {
    display: flex;
    margin-right: 20px;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    color: #EE6565;
    content: '!';
    background-color: #FFC8C8;
    border-radius: 50%;
  }
`

const ErrorField: React.FC<{userName?: string}> = ({userName}) => {
    return (
        <StyledErrorField>
            Пользователя {userName} не существует
        </StyledErrorField>
    )
}

export default ErrorField;
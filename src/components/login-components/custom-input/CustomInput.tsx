import styled from "styled-components";
import React, {InputHTMLAttributes} from "react";
import Label from "./Label";
import ICustomInput from "./CustomInput.interface";
import ErrorTypography from "../../common/ErrorTypography";
import {FieldError} from "react-hook-form";

interface IStyledInput extends InputHTMLAttributes<HTMLInputElement> {
    error?: FieldError;
    ref: React.Ref<any>
}

const StyledInput = styled.input<IStyledInput>`
  margin-bottom: ${props => props.error ? '8px' : '20px'};
  padding: 20px;
  color: #232323;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border-radius: 8px;
  background-color: #F5F5F5;
  border: ${props => props.error ? '1px solid #E26F6F': 'none'};
`

const CustomInput: React.FC<ICustomInput> = React.forwardRef((
    {displayedText, error , ...restProp}, ref
) => {
    return (
        <>
            <Label type={restProp.type}>{displayedText}</Label>
            <StyledInput {...restProp} ref={ref} error={error}/>
            {error && error.type === 'required' && <ErrorTypography>Обязательное поле</ErrorTypography>}
        </>
    )
})

export default CustomInput;
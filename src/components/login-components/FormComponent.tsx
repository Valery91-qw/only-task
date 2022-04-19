import styled from "styled-components";
import {Resolver, useForm} from "react-hook-form";
import React from "react";
import CustomInput from "./custom-input/CustomInput";
import CustomCheckbox from "./custom-checkbox/CustomCheckbox";
import CustomButton from "./custom-button/CustomButton";
import ErrorTypography from "../helpers/ErrorTypography";

const StyledForm = styled.form`
  width: 33.333333%;
  display: flex;
  flex-direction: column;
`

type FormValues = {
    login: string;
    password: string;
};

// const resolver: Resolver<FormValues> = async (values) => {
//     return {
//         values: values.login ? values : {},
//         errors: !values.login
//             ? {
//                 login: {
//                     type: 'required',
//                     message: 'This is required.',
//                 },
//             }
//             : {},
//     };
// };

const FormComponent: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit = handleSubmit((data) => console.log(data));
    const {ref: loginRef,...restLoginRegister} = register('login', {required: true});
    const {ref: passwordRef,...restPasswordRegister} = register('password', {required: true});

    return (
        <StyledForm onSubmit={onSubmit}>
            <CustomInput displayedText='Логин'
                         ref={loginRef}
                         error={errors.login}
                         {...restLoginRegister}
                         type='text'/>
            <CustomInput displayedText='Пароль'
                         ref={passwordRef}
                         error={errors.password}
                         {...restPasswordRegister}
                         type='password'/>
            <CustomCheckbox displayedText='Запомнить меня'
                            type='checkbox'/>
            <CustomButton>Войти</CustomButton>
        </StyledForm>
    )
}

export default FormComponent;
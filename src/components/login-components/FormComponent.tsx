import styled from "styled-components";
import {useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import CustomInput from "./custom-input/CustomInput";
import CustomCheckbox from "./custom-checkbox/CustomCheckbox";
import CustomButton from "./custom-button/CustomButton";
import mockAPI from "../../mockAPI/mockAPI";

const StyledForm = styled.form`
  width: 33.333333%;
  display: flex;
  flex-direction: column;
`

type FormValues = {
    login: string;
    password: string;
};

const FormComponent: React.FC = () => {

    const [login, setLogin] = useState<string>()
    const [password, setPassword] = useState<string>()

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit = handleSubmit((data) => {
        setLogin(data.login);
        setPassword(data.password);
    });
    const {ref: loginRef,...restLoginRegister} = register('login', {required: true});
    const {ref: passwordRef,...restPasswordRegister} = register('password', {required: true});

    useEffect(() => {
        if(login && password)
        mockAPI.singIn({login, password})
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
        })
    }, [login, password])

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
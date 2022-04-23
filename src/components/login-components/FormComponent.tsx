import styled from "styled-components";
import {useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import CustomInput from "./custom-input/CustomInput";
import CustomCheckbox from "./custom-checkbox/CustomCheckbox";
import CustomButton from "./custom-button/CustomButton";
import { useNavigate } from "react-router-dom";
import {useFetch} from "../../hookHelpers/useFetch";
import IForm from "./form.interface";
import ErrorField from "../common/errors/ErrorField";

const StyledForm = styled.form`
  width: 33.333333%;
  display: flex;
  flex-direction: column;
`

const defaultValues = {
    login: '',
    password: '',
}

const FormComponent: React.FC = () => {

    const navigate = useNavigate();
    const [login, setLogin] = useState<string>()
    const [password, setPassword] = useState<string>()
    const { reset ,register, handleSubmit, formState: { errors } } = useForm<IForm>({defaultValues})
    const onSubmit = handleSubmit((data) => {
        setLogin(data.login);
        setPassword(data.password);
    })
    const {ref: loginRef,...restLoginRegister} = register('login', {required: true})
    const {ref: passwordRef,...restPasswordRegister} = register('password', {required: true})
    const [loading, isSuccess] = useFetch(reset, login, password)

    useEffect(() => {
        if(isSuccess) return navigate(`/profile/${login}`)
    }, [isSuccess])

    return (
        <StyledForm onSubmit={onSubmit}>
            {isSuccess === false && !errors.login && <ErrorField userName={login}/>}
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
            <CustomButton isLoad={loading}>Войти</CustomButton>
        </StyledForm>
    )
}

export default FormComponent;
import React from 'react';
import PageWrapper from "../../components/helpers/PageWrapper";
import FormComponent from "../../components/login-components/FormComponent";
import CustomInput from "../../components/login-components/custom-input/CustomInput";
import CustomCheckbox from "../../components/login-components/custom-checkbox/CustomCheckbox";

const Login = () => {
    return (
        <PageWrapper>
            <FormComponent>
                <CustomInput displayedText='Логин'
                             type='text'/>
                <CustomInput displayedText='Пароль'
                             type='password'/>
                <CustomCheckbox displayedText='Запомнить меня'
                                type='checkbox'/>
            </FormComponent>
        </PageWrapper>
    );
};

export default Login;
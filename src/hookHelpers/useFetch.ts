import {useEffect, useState} from "react";
import mockAPI from "../mockAPI/mockAPI";

export const useFetch = (
    reset: (values?: Record<string, any>, options?: Record<string, boolean>) => void,
    login?: string,
    password?: string
) => {

    const [load, setLoad] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<boolean>()

    useEffect(() => {
        if (login && password) {
            setLoad(true);
            mockAPI.singIn({login, password})
                .then((res) => {
                    setLoad(false)
                    setIsSuccess(true)
                    reset({login: '', password: ''})
                })
                .catch((err) => {
                    setLoad(false)
                    setIsSuccess(false)
                    reset({login: '', password: ''})
                })
        }
    }, [login, password])

    return [load, isSuccess]
}
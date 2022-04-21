import {useEffect, useState} from "react";
import mockAPI from "../mockAPI/mockAPI";

export const useFetch = (login?: string, password?: string) => {

    const [load, setLoad] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<boolean>()

    useEffect(() => {
        if (login && password) {
            setLoad(true);
            mockAPI.singIn({login, password})
                .then((res) => {
                    setLoad(false)
                    setIsSuccess(true)
                })
                .catch((err) => {
                    setLoad(false)
                    setIsSuccess(false)
                })
        }
    }, [login, password])

    return [load, isSuccess]
}
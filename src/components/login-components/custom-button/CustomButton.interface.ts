import {ButtonHTMLAttributes} from "react";

interface ICustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoad: boolean | undefined
}

export default ICustomButton
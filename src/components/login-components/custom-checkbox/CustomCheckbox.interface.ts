import {InputHTMLAttributes} from "react";

interface ICustomCheckbox extends InputHTMLAttributes<HTMLInputElement> {
    displayedText: string
}

export default ICustomCheckbox;
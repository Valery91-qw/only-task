import {InputHTMLAttributes} from "react";

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
    displayedText: string
}

export default ICustomInput;
import React, {InputHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
    displayedText: string
    ref?: React.Ref<any>
    error?: FieldError
}

export default ICustomInput;
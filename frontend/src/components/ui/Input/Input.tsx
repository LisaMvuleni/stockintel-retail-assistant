import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import {
  InputWrapper,
  Label,
  InputContainer,
  StyledInput,
  TogglePassword,
} from "./Input.styles";


interface InputProps {

  label: string;

  placeholder?: string;

  type?: string;

}


function Input({
  label,
  placeholder,
  type = "text",
}: InputProps) {


const [showPassword, setShowPassword] = useState(false);


const isPassword = type === "password";


return (

<InputWrapper>

<Label>
 {label}
</Label>


<InputContainer>

<StyledInput

type={
 isPassword && showPassword
 ? "text"
 : type
}

placeholder={placeholder}

/>


{
isPassword && (

<TogglePassword
type="button"

onClick={() =>
setShowPassword(!showPassword)
}

>

{
showPassword
?
<FiEyeOff />
:
<FiEye />
}

</TogglePassword>

)

}


</InputContainer>


</InputWrapper>

);

}


export default Input;
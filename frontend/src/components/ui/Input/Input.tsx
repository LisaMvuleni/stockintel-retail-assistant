import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import {
  InputWrapper,
  Label,
  InputContainer,
  StyledInput,
  TogglePassword,
  ErrorText,
} from "./Input.styles";

interface InputProps {
  label: string;
  placeholder?: string;
  type?: string;
  error? : string;
  value: string;
onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  label,
  placeholder,
  type = "text",
  value,
  error,
  onChange,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <InputWrapper>
      <Label>{label}</Label>

      <InputContainer>
        <StyledInput
         $hasError={!!error}
          type={
            isPassword && showPassword
              ? "text"
              : type
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {isPassword && (
          <TogglePassword
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </TogglePassword>
        )}
      </InputContainer>
      {error && (
    <ErrorText>{error}</ErrorText>
)}
    </InputWrapper>
  );
}

export default Input;
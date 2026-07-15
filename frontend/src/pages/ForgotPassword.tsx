import { useState } from "react";

import AuthLayout from "../components/layout/AuthLayout/AuthLayout";
import LogoComponent from "../components/ui/Logo/Logo";
import Input from "../components/ui/Input/Input";
import Button from "../components/ui/Button/Button";
import Link from "../components/ui/Link/Link";
import { Container } from "./ForgotPassword.style";
import { useNavigate } from "react-router-dom";
import {
  ForgotPasswordContent,
  LogoSection,
  HeaderSection,
  FormSection,
  BackToLogin,
} from "./ForgotPassword.style";

import 
{
    Heading2, Body,
} from "../components/ui/Typography/Typography";

function ForgotPassword()
{
    const [email, setEmail] = useState ("");
    const [emailError, setEmailError] = useState ("");
    const navigate = useNavigate();

    const validateEmail = () => 
    {
        let isValid = true;
        setEmailError ("");

     if (!email.trim())
     {
      setEmailError("Email address is required");
      isValid = false;
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError("Please enter a valid email address")
      isValid = false;
    }
      return isValid;
    }

    const handleForgot = () => 
    {
        if (!validateEmail())
        {
            return;
        }
        console.log("Email: ", email);
    }
    return (
      <AuthLayout>
        <Container>
  <ForgotPasswordContent>

    <LogoSection>
      <LogoComponent />
    </LogoSection>

    <HeaderSection>
      <Heading2>

        Forgot Password
      </Heading2>

      <Body>
        Enter your email to reset your password.    
      </Body>

    </HeaderSection>

    <FormSection>
      <Input
        label="Email Address"
        placeholder="Enter your email address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
      />

      <Button onClick={handleForgot}>
        Send Reset Link
      </Button>
    </FormSection>

    <BackToLogin>
      <Link onClick={() => navigate("/login-page")}>
        Back to Login
      </Link>
    </BackToLogin>

  </ForgotPasswordContent>
  </Container>
</AuthLayout>

    )
}

export default ForgotPassword;
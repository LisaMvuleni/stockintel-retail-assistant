import { useState } from "react";

import AuthLayout from "../components/layout/AuthLayout/AuthLayout";
import LogoComponent from "../components/ui/Logo/Logo";
import Input from "../components/ui/Input/Input";
import Button from "../components/ui/Button/Button";
import Link from "../components/ui/Link/Link";
import { useNavigate } from "react-router-dom";
import {
  Heading2,
  Body,
} from "../components/ui/Typography/Typography";

import { LoginContent } from "./LoginPage.style";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const validateForm = () => {

    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Email address is required");
      isValid = false;
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError("Please enter a valid email address")
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Please enter a password");
      isValid = false;
    }

    return isValid;
  }

 const handleLogin = () => {
  if (!validateForm()) {
    return;
  }

  console.log("Email:", email);
  console.log("Password:", password);

  navigate("/dashboard");
};

  return (
    <AuthLayout>
      <LoginContent>
        <LogoComponent />

        <Heading2>
          Welcome Back
        </Heading2>

        <Body>
          Sign in to continue to StockIntel
        </Body>

        <Input
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />
      <Link onClick={() => navigate("/forgot-password")}>
        Forgot Password?
      </Link>

        <Button onClick={handleLogin}>
          Login
        </Button>
      </LoginContent>
    </AuthLayout>
  );
}

export default LoginPage;
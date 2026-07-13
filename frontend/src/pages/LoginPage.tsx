import AuthLayout from "../components/layout/AuthLayout/AuthLayout";
import LogoComponent from "../components/ui/Logo/Logo";
import Input from "../components/ui/Input/Input";
import Button from "../components/ui/Button/Button";
import Link from "../components/ui/Link/Link";

import {
  Heading2,
  Body,
} from "../components/ui/Typography/Typography";

import { LoginContent } from "./LoginPage.style";

function LoginPage() {
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
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
        />

        <Link>
          Forgot Password?
        </Link>

        <Button>
          Login
        </Button>
      </LoginContent>
    </AuthLayout>
  );
}

export default LoginPage;
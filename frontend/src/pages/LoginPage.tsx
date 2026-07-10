import AuthLayout from "../components/layout/AuthLayout/AuthLayout";

import Logo from "../components/ui/Logo/Logo";
import Input from "../components/ui/Input/Input";
import Button from "../components/ui/Button/Button";
import Link from "../components/ui/Link/Link";

import { LoginContent } from "./LoginPage.style";


function LoginPage() {

  return (

    <AuthLayout>

      <LoginContent>

        <Logo />

        <h2>
          Welcome Back
        </h2>


        <p>
          Sign in to continue to StockIntel
        </p>


        <Input
          label="Email Address"
          placeholder="Enter your email address"
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
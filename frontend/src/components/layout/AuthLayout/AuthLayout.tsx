import React from "react";

import {
  Container,
  BackgroundImage,
  RightPanel,
  LoginCard,
} from "./AuthLayout.style";

import backgroundImage from "../../../assets/Images/Background.png";
interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Container>

      <BackgroundImage
        src={backgroundImage}
        alt="AI Background"
      />

      <RightPanel>

        <LoginCard>

          {children}

        </LoginCard>

      </RightPanel>

    </Container>
  );
}

export default AuthLayout;
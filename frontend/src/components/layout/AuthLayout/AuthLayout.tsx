import React from "react";

import {
  Container,
  RightPanel,
  LoginCard,
} from "./AuthLayout.style";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Container>
      <RightPanel>
        <LoginCard>
          {children}
        </LoginCard>
      </RightPanel>
    </Container>
  );
}

export default AuthLayout;
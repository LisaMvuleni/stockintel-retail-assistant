import {
  AuthContainer,
  LeftPanel,
  RightPanel,
  BrandTitle,
  BrandDescription,
  LoginCard,
  Illustration
} from "./AuthLayout.style";
import retailImage from "../../../assets/retail-illustration.png";


interface AuthLayoutProps {
  children: React.ReactNode;
}


function AuthLayout({
  children,
}: AuthLayoutProps) {


return (

<AuthContainer>


<LeftPanel>

<LeftPanel>

  <Illustration
    src={retailImage}
    alt="Retail inventory illustration"
  />


  <BrandTitle>
    Smarter Inventory Decisions
  </BrandTitle>


  <BrandDescription>
    Empower your retail operations with AI-driven insights
    that transform complex data into actionable stock
    management decisions.
  </BrandDescription>


</LeftPanel>


</LeftPanel>



<RightPanel>

  <LoginCard>
    {children}
  </LoginCard>

</RightPanel>


</AuthContainer>

);

}


export default AuthLayout;
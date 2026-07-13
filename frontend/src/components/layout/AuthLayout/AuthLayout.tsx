import React from "react";

import {
  Container,
  LeftPanel,
  RightPanel,
  WarehouseImage,
  FadeOverlay,
  Content,
  Logo,
  // BrandTitle,
  // BrandDescription,
  FloatingCard,
  //StatOne,
  StatTwo,
  StatTitle,
  StatValue,
  LoginCard,
} from "./AuthLayout.style";

import AIInsightsCard from "../../ui/AIInsightscard/AIInsightsCard";

import warehouseImage from "../../../assets/Images/warehouse.png";


interface AuthLayoutProps {
  children: React.ReactNode;
}


function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Container>

      <LeftPanel>

        <WarehouseImage
          src={warehouseImage}
          alt="Warehouse"
        />

        <FadeOverlay />


        <Content>

          <Logo>
            <img
              src="/logo.png"
              alt="StockIntel"
            />
          </Logo>


          {/* <BrandTitle>
            Smarter Inventory
            <br />
            Decisions
          </BrandTitle>


          <BrandDescription>
            Empower your retail operations with AI-driven insights
            that transform complex data into actionable stock
            management decisions.
          </BrandDescription> */}


        </Content>



        {/* <FloatingCard> */}

          {/* <AIInsightsCard /> */}

        {/* </FloatingCard> */}



        {/* <StatOne>

          <StatTitle>
            Low Stock Items
          </StatTitle>

          <StatValue>
            24
          </StatValue>

        </StatOne> */}



        {/* <StatTwo>

          <StatTitle>
            Forecast Accuracy
          </StatTitle>

          <StatValue>
            98%
          </StatValue>

        </StatTwo> */}


      </LeftPanel>




      <RightPanel>

        <LoginCard>

          {children}

        </LoginCard>

      </RightPanel>


    </Container>
  );
}


export default AuthLayout;
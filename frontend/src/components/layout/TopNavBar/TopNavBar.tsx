import {
  NavBar,
  LeftSection,
  RightSection,
  WelcomeText,
  UserAvatar,
} from "./TopNavBar.style.ts";

function TopNavBar() {
  return (
    <NavBar>

      <LeftSection>
        <WelcomeText>
          Welcome back, Cashier 👋
        </WelcomeText>
      </LeftSection>

      <RightSection>

        <UserAvatar>
          NM
        </UserAvatar>

      </RightSection>

    </NavBar>
  );
}

export default TopNavBar;
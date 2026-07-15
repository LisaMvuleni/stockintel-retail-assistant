import {
  NavBar,
  LeftSection,
  RightSection,
  WelcomeText,
  UserAvatar,
  NotificationButton,
  NotificationBadge,
} from "./TopNavBar.style.ts";



import { Bell } from "lucide-react";

function TopNavBar() {
  return (
    <NavBar>

      <LeftSection>
        <WelcomeText>
          Welcome back, Cashier 👋
        </WelcomeText>
      </LeftSection>

     <RightSection>

  <NotificationButton>
    <Bell size={22} />
    <NotificationBadge>3</NotificationBadge>
  </NotificationButton>

  <UserAvatar>
    NM
  </UserAvatar>

</RightSection>

    </NavBar>
  );
}

export default TopNavBar;
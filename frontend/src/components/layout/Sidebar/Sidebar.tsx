import LogoComponent from "../../ui/Logo/Logo";

import {
  SidebarContainer,
  LogoSection,
  Navigation,
  NavItem,
  LogoutSection,
} from "./Sidebar.style";

import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Package,
  Shapes,
  Search,
  ShoppingCart,
  ScanLine,
  Users,
  Sparkles,
  BarChart3,
  CircleHelp,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <SidebarContainer>

      <LogoSection>
        <LogoComponent />
      </LogoSection>

      <Navigation>
    
       <NavLink to="/dashboard">
       <NavItem>
          <LayoutDashboard size={20} />
          Dashboard
        </NavItem>
        </NavLink>

        <NavLink to="/products">
        <NavItem>
          <Package size={20} />
          Products
        </NavItem>
        </NavLink>

        <NavItem>
          <Sparkles size={20} />
          AI Assistant
        </NavItem>

        <NavItem>
          <BarChart3 size={20} />
          Reports
        </NavItem>

        <NavItem>
          <CircleHelp size={20} />
          Help & Support
        </NavItem>

        <NavItem>
          <Settings size={20} />
          Settings
        </NavItem>

      </Navigation>

      <LogoutSection>

        <NavItem> Logout</NavItem>

      </LogoutSection>

    </SidebarContainer>
  );
}

export default Sidebar;
import { LogoImage } from "./Logo.style";

import Logo from "../../../assets/logo/Logo.png";

function LogoComponent() {
  return (
    <LogoImage
      src={Logo}
      alt="StockIntel Logo"
    />
  );
}

export default LogoComponent;
import { StyledLink } from "./Link.style";

interface LinkProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function Link({
  children,
  onClick,
}: LinkProps) {
  return (
    <StyledLink onClick={onClick}>
      {children}
    </StyledLink>
  );
}

export default Link;
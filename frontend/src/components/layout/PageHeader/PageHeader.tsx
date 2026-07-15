import {
  HeaderContainer,
  Title,
  Description,
} from "./PageHeader.style";

interface PageHeaderProps {
  title: string;
  description: string;
}

function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>

      <Description>
        {description}
      </Description>
    </HeaderContainer>
  );
}

export default PageHeader;
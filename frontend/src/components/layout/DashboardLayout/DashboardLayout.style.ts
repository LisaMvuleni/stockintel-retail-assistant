import styled from "styled-components";
import Back from "../../../assets/Images/Back.png";

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #ffff;
  background-size: cover;
  background-image:
    linear-gradient(
      rgba(255,255,255,0.90),
      rgba(255,255,255,0.90)
    ),
    url(${Back});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const MainContent = styled.main`
  flex: 1;

  display: flex;

  flex-direction: column;

  overflow: hidden;
`;
export const PageContent = styled.div`
  flex: 1;
  padding: 32px;
  overflow-y: auto;

  background-image:
    linear-gradient(
      rgba(255,255,255,0),
      rgba(255,255,255,0)
    ),
    url(${Back});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
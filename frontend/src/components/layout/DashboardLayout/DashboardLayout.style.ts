import styled from "styled-components";


export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #fff8f8;
  background-size: cover;
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
`;
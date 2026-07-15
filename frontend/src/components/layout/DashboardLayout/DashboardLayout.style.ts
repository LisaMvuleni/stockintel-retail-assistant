import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;

  width: 100%;

  min-height: 100vh;

  background: #f8fafc;
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
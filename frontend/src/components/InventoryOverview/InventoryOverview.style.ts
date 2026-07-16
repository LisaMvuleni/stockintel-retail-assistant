import styled from "styled-components";

export const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 18px;
  width:100%;
  box-shadow: 0 8px 25px rgba(0,0,0,.05);
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: px;
  width:100%;
`;

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ColorDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

export const Percent = styled.span`
  margin-left: auto;
  font-weight: 700;
`;

export const Count = styled.span`
  color: #6b7280;
`;

export const BottomSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
`;
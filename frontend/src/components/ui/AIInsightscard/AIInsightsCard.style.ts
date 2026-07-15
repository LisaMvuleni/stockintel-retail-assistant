import styled from "styled-components";


export const Card = styled.div`
  width: 320px;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(12px);
  border-radius: 22px;
  padding: 24px;

  box-shadow:
    0 20px 45px rgba(15,23,42,.12);

  display: flex;
  flex-direction: column;
  gap: 20px;
`;


export const Header = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`;


export const Title = styled.h4`
  font-size:.rem;
  font-weight:700;
  color:#1f2937;
`;


export const AccuracySection = styled.div`
  display:flex;
  justify-content:space-between;
`;


export const Percentage = styled.h1`
  font-size:3rem;
  color:#111827;
  line-height:1;
  font-weight:800;
`;


export const Growth = styled.span`
  color:#16a34a;
  font-size:.85rem;
  font-weight:600;
`;


export const Chart = styled.div`
  height:60px;
  border-radius:14px;
  overflow:hidden;
  position:relative;
`;


export const ChartLine = styled.svg`
  width:100%;
  height:100%;
`;


export const Insights = styled.div`
  display:flex;
  flex-direction:column;
  gap:4px;
`;


export const Insight = styled.div`
  display:flex;
  align-items:center;
  gap:10px;

  font-size:.83rem;
  color:#374151;
`;


export const Dot = styled.div`
  width:8px;
  height:8px;
  border-radius:50%;
  background:#dc2626;
`;


export const AIChip = styled.div`
  width:70px;
  height:70px;

  border-radius:18px;

  border:2px solid rgba(220,38,38,.25);

  display:flex;
  justify-content:center;
  align-items:center;

  font-weight:700;
  color:#dc2626;

  align-self:flex-end;
`;
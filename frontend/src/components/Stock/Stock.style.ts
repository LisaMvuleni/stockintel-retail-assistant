import styled from "styled-components";

interface StatusBadgeProps {
    $status: string;
}

export const Table = styled.table`
 width: 100%;

  background: ${({ theme }) => theme.colors.white};

  border-radius: 16px;

  border-collapse: collapse;

  overflow: hidden;

  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);

`;

export const TableHead = styled.th`
  padding: 18px;

  text-align: left;

  background: #fff8f8;

  font-size: 14px;

  font-weight: 600;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #eeeeee;

  &:last-child {
    border-bottom: none;
  }
`;


export const TableCell = styled.td`
  padding: 18px;

  font-size: 14px;
`;

export const TableCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 18px;
  width: 100%;
   height:100%;
  box-shadow: 0 8px 24px rgba(15,23,42,0.06);
`;

export const TableHeader = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
`;

export const TableTitle = styled.h3`
  margin:0;
  font-size:22px;
`;

export const ViewAll = styled.button`
  border:none;
  background:none;
  color:${({theme})=>theme.colors.primary};
  cursor:pointer;
  font-weight:600;
`;

export const StatusBadge = styled.span<StatusBadgeProps>`
  padding: 6px 12px;

  border-radius: 999px;

  font-size: 12px;

  font-weight: 600;

  color: white;

  background: ${({ $status }) => {
    switch ($status) {
      case "Low Stock":
        return "#F59E0B";
      case "Out of Stock":
        return "#DC2626";
      default:
        return "#6B7280";
    }
  }};
`;
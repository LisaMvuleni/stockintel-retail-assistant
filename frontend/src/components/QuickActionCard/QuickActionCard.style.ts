import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: 0.25s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0,0,0,.08);
    }
`;

export const IconContainer = styled.div<{ color: string }>`
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: ${({ color }) => color};

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    font-size: 24px;
`;

export const Content = styled.div`
    flex: 1;
    margin-left: 16px;
`;

export const Title = styled.h4`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
`;

export const Description = styled.p`
    margin-top: 4px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Arrow = styled.div`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.textSecondary};
`;
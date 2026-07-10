import styled from "styled-components";


export const StyledButton = styled.button`

width: 100%;

height: 48px;


border: none;

border-radius: 8px;


background-color:
${({theme}) => theme.colors.primary};


color:
${({theme}) => theme.colors.white};


font-size: 16px;

font-weight: 600;


cursor: pointer;


transition: 0.2s;


&:hover {

background-color:
${({theme}) => theme.colors.primaryDark};

}

`;
import styled from 'styled-components';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;

  @media (min-width: 1400px) {
    width: 22%;
  }

  @media (min-width: 1900px) {
    width: 16%;
  }
`;

export const ImgStyled = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const TitleStyled = styled.span`
  text-align: center;

`;

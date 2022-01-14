import styled from 'styled-components';

export const HomeContainerStyled = styled.div`
  width: 100%;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
`;

export const CardsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0;
  justify-content: space-between;
`;

export const DropdownsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0 10px;

  > select {
    width: 50%;
  }
`;

export const OrderButtonsStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const H3Styled = styled.p`
  margin: 1rem auto;
`;

export const LoadingStyled = styled.img`
  width: 100%;
`;

import styled from 'styled-components';
import { colors } from '../../themes';

export const HomeContainerStyled = styled.div`
  width: 100%;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  @-webkit-keyframes fadeIn {
    0% { opacity: 0 }
    100% { opacity: 1 }
  }
  @keyframes fadeIn {
    0% { opacity: 0 }
    100% { opacity: 1 }
  }

  @media (min-width: 1400px) {
    gap: 2rem 1rem;

    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    @-webkit-keyframes fadeIn {
      0% { opacity: 0 }
      100% { opacity: 1 }
    }
    @keyframes fadeIn {
      0% { opacity: 0 }
      100% { opacity: 1 }
    }
  }
`;

export const H3Styled = styled.h3`
  color: ${colors.violet.base};
`;

export const CardsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0;
  justify-content: space-between;

  @media (min-width: 1400px) {
    gap: 2rem 3rem;
    justify-content: center;
  }

  @media (min-width: 1900px) {
    gap: 2rem 3rem;
    justify-content: space-between;
  }
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

  @media (min-width: 1400px) {
    justify-content: flex-end;

    > button {
      margin-left: 20px;
    }
  }
`;

export const PStyled = styled.p`
  margin: 1rem auto;
`;

export const LoadingStyled = styled.img`
  width: 100%;

  @media (min-width: 1400px) {
    width: 50%;
    margin: 0 auto;
  }
`;

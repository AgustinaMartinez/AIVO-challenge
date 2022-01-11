import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const ButtonSidebarStyled = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  outline: 0;
  width: 100%;
  border-bottom: 0.5px solid #656565;
  background-color: transparent;
  padding: .8125rem; 
  > p {
    font-size: 1.125rem;
    font-weight: ${typography.weights.regular};
    line-height: 1.3125rem;
    letter-spacing: 0em;
    color: #777777;
  }
  :hover{
    border-bottom: 0.6px solid ${colors.gray.base};
  }
  :active {
    background-color: ${colors.gray.base};
  }
`;

export const IconStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: .8125rem;
  > svg {
    width: 1.125rem;
    height: 1.125rem;
    fill: ${colors.gray.base};
  };
`;

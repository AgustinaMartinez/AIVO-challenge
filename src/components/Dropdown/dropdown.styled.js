import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const DropdownHeaderStyled = styled.select`
  padding: 10px 10px;
  border: none;
  border-radius: 10px;
  background-color: ${colors.white.base};
  box-shadow: 0 10px 25px rgba(0,0,0,.2);
  font-family: ${typography.fonts.base};
  font-size: 0.9rem;
  outline: none;
  cursor: pointer;

  @media (min-width: 1400px) {
    padding: 1rem;
  }
`;

export const DropdownItemStyled = styled.option`
`;

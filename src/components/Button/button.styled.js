import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const ButtonStyled = styled.button(({ type }) =>`
  padding: 6px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${type === 'primary' ? colors.violet.base : colors.white.base};
  font-weight: ${typography.weights.medium};
  border: 2px solid ${type === 'primary' ? colors.violet.base : colors.violet.secondary};
  border-radius: 5px;
  background: ${type === 'primary' ? colors.white.base : colors.violet.base};
  cursor: pointer;

  > svg {
      stroke: ${type === 'primary' ? colors.violet.base : colors.white.base};
    }

  &:active {
    border: 2px solid ${type === 'primary' ? colors.violet.base : colors.violet.secondary};
    color: ${type === 'primary' ? colors.white.base : colors.violet.base};
    background: ${type === 'primary' ? colors.violet.base : colors.white.base};
    transition: .2s;

    > svg {
      stroke: ${colors.white.base};
    }
  }

  @media (min-width: 1400px) {
    padding: 1rem 2rem;
    font-size: 1.2rem;

    &:hover {
      border: 2px solid ${type === 'primary' ? colors.violet.base : colors.violet.secondary};
      background: ${type === 'primary' ? colors.violet.base : colors.violet.secondary};
      color: ${type === 'primary' ? colors.white.base : colors.white.base};
      transition: .2s;

      > svg {
        stroke: ${type === 'primary' ? colors.white.base : colors.white.base};
      }
    }

    > svg {
      width: 30px;
      stroke: ${type === 'primary' ? colors.violet.base : colors.white.base};

      &:hover {
        stroke: ${type === 'primary' ? colors.white.base : colors.white.base};
      }
    }
  }
`);

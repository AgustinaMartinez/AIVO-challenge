import styled from 'styled-components';
import { colors, typography } from '../../themes';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
`;

export const ImgStyled = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const TitleStyled = styled.span`
  text-align: center;
`;

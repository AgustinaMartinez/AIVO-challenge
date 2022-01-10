import styled from 'styled-components';
import { colors, typography } from '../../themes';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  width: 100%;
  z-index: 100;
  box-shadow: 1px -2px 35px 2px rgba(0,0,0,0.58);
  -webkit-box-shadow: 1px -2px 35px 2px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px -2px 35px 2px rgba(0,0,0,0.58);
`;

export const ContainerStyled = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white.base};
  padding: .8125rem .9375rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (min-width: 1400px) {
    padding: 0 3rem 0 0;
  }
`;

export const ImgStyled = styled.img`
  width: 60px;
  height: auto;
`;

export const MenuButtonStyled = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  background-color: ${colors.white};
`;

export const ScrollLink = styled(Link)(({ active }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  list-style: none;
  width: 100%;
  height: 100%;
  font-size: ${typography.sizes.p};
  font-family: ${typography.fonts.secondary};
  color: ${active ? colors.lightBlue.base : colors.gray.base};
  background-color: ${active ? colors.violet.base : colors.white.base};
  &:active {
    background-color: ${active ? colors.violet.base : colors.white.base};
  }
`);

export const TheLink = styled(Link)(({ active }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  list-style: none;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-family: ${typography.fonts.secondary};
  color: ${active ? colors.lightBlue.base : colors.gray.base};
  background-color: ${active ? colors.violet.base : colors.white.base};
  &:active {
    background-color: ${active ? colors.violet.base : colors.white.base};
  }
`);

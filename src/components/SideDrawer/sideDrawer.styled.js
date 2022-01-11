import styled, { css } from 'styled-components';
import { colors, typography } from '../../themes';

export const BackdropStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background: rgba(0,0,0,0.3);
  z-index: 101;
`;

export const SideDrawerStyled = styled.nav`
  height: 100%;
  background: ${colors.white.secondary};
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 300px;
  z-index: 200;
  transform: ${({show}) => show ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 8.5rem;
  width: 100%;
  padding: .5625em;
  position: relative;
`;

export const ImgContainerStyled = styled.div`
  width: 80px;
  border-radius: 50%;
  overflow: hidden;

  > img {
    width: 100%;
  }
`;

export const ButtonStyled = styled.button(() => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;
    width: 100%;
    padding: 2rem 1.8rem;
    margin-top: 2rem;
    font-family: ${typography.fonts.secondary};
    color: ${colors.black.base};
    background-color: ${colors.white.secondary};

    &:active {
      background-color: ${colors.violet.base};
      color: ${colors.white.base};
    }
  `;
});

export const ImgLogoStyled = styled.img`
  width: 100px;
  align-self: center;
`;

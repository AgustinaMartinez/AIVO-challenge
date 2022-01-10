import { useState } from 'react';
import SideDrawer from '../SideDrawer';
import { MenuIcon } from '../icons';
import {
  ContainerStyled,
  HeaderStyled,
  MenuButtonStyled,
  ImgStyled,
  StyledUl,
  TheLink,
} from './header.styled';

const Header = () => {
  const [sideDraweOpen, setsideDraweOpen] = useState(false);
  const [keyActive, setKeyActive] = useState('/');
  const screenWidth = window.innerWidth;

  const navItems = [
    {
      name: 'Cerrar sesión',
      to: '/login'
    },
  ];

  const drawerToggleClick = () =>{
    setsideDraweOpen(!sideDraweOpen);
  };

  return (
    <>
      <SideDrawer 
        click={drawerToggleClick} 
        sideDraweOpen={sideDraweOpen}
      />
      <HeaderStyled>
        <ContainerStyled>
          {screenWidth < 1000 ? (
            <MenuButtonStyled onClick={drawerToggleClick}>
              <MenuIcon />
            </MenuButtonStyled>
          ) : (
            <StyledUl>
              {navItems.map(item => (
                <TheLink
                  to={item.to}
                  key={item}
                  active={keyActive === item.name ? true : false}
                  onClick={() => keyActive === item.name ? setKeyActive(null) : setKeyActive(item.name)}
                >
                  {item.name}
                </TheLink>))}
            </StyledUl>
            )}
          <ImgStyled src='/assets/pics/logo-white.png' alt="logo" />
        </ContainerStyled>
      </HeaderStyled>
    </>
  );
};

export default Header;

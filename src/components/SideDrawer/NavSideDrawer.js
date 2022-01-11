import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  SideDrawerStyled,
  ContentStyled,
  TheLink,
  LogoutButtonStyled,
  ImgLogoStyled,
} from './sideDrawer.styled';

const NavSideDrawer = ({ show, setShow }) => {
  const [keyActive, setKeyActive] = useState('');
  const isHomePage = window.location.pathname === '/home' ? true : false;
  const { logout } = useAuth0();
 
  const sidebarButtons = [
    {
      name: 'Cerrar sesión',
      to: '/login'
    },
  ];

  const sidebarButton = [
    {
      name: 'Ir al home',
      to: '/'
    },
  ];

  const handleClick = name => {
    keyActive === name ? setKeyActive(null) : setKeyActive(name);
    setShow(false);
  };

  return (
    <SideDrawerStyled show={show}>
      <ContentStyled>
        {isHomePage ? sidebarButtons.map(item => (
          <LogoutButtonStyled
            key={item.name}
            active={keyActive === item.name ? true : false}
            onClick={() => logout({ returnTo: 'http://localhost:3000' })}
          >
            {item.name}
          </LogoutButtonStyled>
        )) : sidebarButton.map(item => {
          return (
            <TheLink
              smooth
              to={item.to}
              key={item.to}
              active={keyActive === item.to ? true : false}
              onClick={() => handleClick(item.to)}
              >
              {item.name}
            </TheLink>
          )
        })}
      </ContentStyled>
      <ImgLogoStyled alt="logo" src="/assets/pics/aivo.png" />
    </SideDrawerStyled>
  );
};

export default NavSideDrawer;

import { useState } from 'react';
import {
  SideDrawerStyled,
  ContentStyled,
  TheLink,
  ImgLogoStyled,
} from './sideDrawer.styles';

const NavSideDrawer = ({ show, setShow }) => {
  const [keyActive, setKeyActive] = useState('#aboutUs');
  const isHomePage = window.location.pathname === '/' ? true : false;

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
          <TheLink
            smooth
            to={item.to}
            key={item.name}
            active={keyActive === item.name ? true : false}
            onClick={() => handleClick(item.name)}
            >
            {item.name}
          </TheLink>
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
      <ImgLogoStyled alt="logo" src="" />
    </SideDrawerStyled>
  );
};

export default NavSideDrawer;

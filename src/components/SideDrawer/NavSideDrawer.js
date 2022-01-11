import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  SideDrawerStyled,
  ContentStyled,
  ImgContainerStyled,
  ButtonStyled,
  ImgLogoStyled,
} from './sideDrawer.styled';

const NavSideDrawer = ({ show }) => {
  const isHomePage = window.location.pathname === '/home' ? true : false;
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
 
  const sidebarButtons = ['Login', 'Logout'];

  const handleOnClick = () => {
    if (isHomePage && isAuthenticated) {
      logout({ returnTo: process.env.REACT_APP_AUTH0_URI_RETURN });
    } else {
      loginWithRedirect();
    }
  };

  return (
    <SideDrawerStyled show={show}>
      <ContentStyled>
        {user && (
          <div>
            <ImgContainerStyled>
              <img alt="user" src={user?.picture}/>
            </ImgContainerStyled>
            <p>{user?.name}</p>
          </div>
        )}
        <ButtonStyled
          onClick={() => handleOnClick()}
        >
          {(isHomePage && isAuthenticated) ? sidebarButtons[1] : sidebarButtons[0]}
        </ButtonStyled>
      </ContentStyled>
      <ImgLogoStyled alt="logo" src="/assets/pics/aivo.png" />
    </SideDrawerStyled>
  );
};

export default NavSideDrawer;

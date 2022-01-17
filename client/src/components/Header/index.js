import { useState } from 'react';
import SideDrawer from '../SideDrawer';
import { MenuIcon } from '../icons';
import { useAuth0 } from '@auth0/auth0-react';
import {
  ContainerStyled,
  HeaderStyled,
  MenuButtonStyled,
  UserStyled,
  LastContainerStyled,
  ImgContainerStyled,
  ImgStyled,
  StyledUl,
  TheLink,
} from './header.styled';

const Header = () => {
  const [sideDraweOpen, setsideDraweOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const isHomePage = window.location.pathname === '/home' ? true : false;
  const screenWidth = window.innerWidth;

  const sidebarButtons = ['Login', 'Logout'];

  const handleOnClick = () => {
    if (isHomePage && isAuthenticated) {
      logout({ returnTo: process.env.REACT_APP_AUTH0_URI_RETURN_DEV || process.env.REACT_APP_AUTH0_URI_RETURN_PROD });
    } else {
      loginWithRedirect();
    }
  };

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
            <>
              {user && (
                <UserStyled>
                  <ImgContainerStyled>
                    <img alt="user" src={user?.picture}/>
                  </ImgContainerStyled>
                  <p>{user?.name}</p>
                </UserStyled>
              )}
            </>
            )}
            <LastContainerStyled>
              {screenWidth > 1400 && (<StyledUl>
                <TheLink
                  onClick={() => handleOnClick()}
                >
                  {(isHomePage && isAuthenticated) ? sidebarButtons[1] : sidebarButtons[0]}
                </TheLink>
              </StyledUl>)}
              <ImgStyled src='/assets/pics/aivo.png' alt="logo" />
            </LastContainerStyled>
        </ContainerStyled>
      </HeaderStyled>
    </>
  );
};

export default Header;

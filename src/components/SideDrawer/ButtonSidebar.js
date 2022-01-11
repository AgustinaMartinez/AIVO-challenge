import { ButtonSidebarStyled, IconStyled } from './buttonSidebar.styled';

const ButtonSidebar = ({ children, onClick, icon }) => {
  return (
    <ButtonSidebarStyled onClick={onClick}>
      <IconStyled>
        {icon}
      </IconStyled>
      <p>{children}</p>
    </ButtonSidebarStyled>
  );
};

export default ButtonSidebar;

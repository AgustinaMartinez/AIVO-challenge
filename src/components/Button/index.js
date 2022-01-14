import { ButtonStyled } from './button.styled';

const Button = props => {
  const { id, title, icon = false, onClick } = props;

  return (
    <ButtonStyled id={id} onClick={onClick}>{title}
      {icon}
    </ButtonStyled>
  );
};

export default Button;

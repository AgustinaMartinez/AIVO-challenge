import { ButtonStyled } from './button.styled';

const Button = props => {
  const {
    id,
    type,
    width,
    title,
    icon = false,
    onClick,
  } = props;

  return (
    <ButtonStyled id={id} type={type} style={{ width }} onClick={onClick}>{title}
      {icon}
    </ButtonStyled>
  );
};

export default Button;

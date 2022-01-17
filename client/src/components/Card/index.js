import { CardStyled, ImgStyled, TitleStyled } from './card.styled';

const Card = props => {
  const { alt, title, image } = props;

  return (
    <CardStyled>
      <ImgStyled alt={alt} src={image} />
      <TitleStyled>{title}</TitleStyled>
    </CardStyled>
  );
};

export default Card;

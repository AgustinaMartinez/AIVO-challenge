import { useData } from '../../context/data.context';
import { HeroContainerStyled, ImgHeroStyled } from './hero.styled';

const Hero = () => {
  const { data } = useData();
  const heroMovie = data?.data.filter(movie => movie.title === 'Sherlock: The Abominable Bride')[0];

  return (
    <HeroContainerStyled>
      <h3>Last Added</h3>
      <ImgHeroStyled alt="Hero Movie" src={heroMovie?.images?.['Poster Art']?.url} />
    </HeroContainerStyled>
  )
}

export default Hero;

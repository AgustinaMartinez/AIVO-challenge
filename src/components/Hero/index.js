import { useData } from '../../context/data.context';
import { HeroContainerStyled, ImgHeroStyled, LoadingStyled} from './hero.styled';

const Hero = () => {
  const { data } = useData();
  const heroMovie = data?.data.filter(movie => movie.title === 'Sherlock: The Abominable Bride')[0];

  return (
    <HeroContainerStyled>
      <h3>Most Popular</h3>
      {heroMovie?.images?.['Poster Art']?.url
        ? <ImgHeroStyled alt="Hero Movie" src={heroMovie?.images?.['Poster Art']?.url} />
        : <LoadingStyled src="http://auxiliadoravaldivia.cl/colegio/load.gif" />
      } 
    </HeroContainerStyled>
  );
};

export default Hero;

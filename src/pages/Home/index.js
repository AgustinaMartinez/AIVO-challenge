import { Hero } from '../../components';
import { HomeContainerStyled } from './home.styled';

const Home = () => {  
  return (
    <HomeContainerStyled>
      <h1>This is home</h1>
      <Hero />
    </HomeContainerStyled>
  )
}

export default Home;

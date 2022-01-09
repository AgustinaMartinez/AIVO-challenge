import { useEffect } from 'react';
import { Hero } from '../../components';
import { getMovies } from '../../services/movies.service';
import { HomeContainerStyled } from './home.styled';

const Home = () => {
  useEffect(() => {
    const getData = () => {
      getMovies().then(value => {
        console.log(value)
      }).catch(e => {
        console.log(e)
      });
    };
    getData();
  }, []);
  
  return (
    <HomeContainerStyled>
      <h1>This is home</h1>
      <Hero />
    </HomeContainerStyled>
  )
}

export default Home;

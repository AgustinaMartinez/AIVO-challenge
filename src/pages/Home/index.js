import { useState, useEffect } from 'react';
import { Card, Hero } from '../../components';
import { getMovies } from '../../services/movies.service';
import { useData } from '../../context/data.context';
import { HomeContainerStyled, CardsContainerStyled } from './home.styled';

const Home = () => {
  const [isYearAsc, setIsYearAsc] = useState(false);
  const [isTitleAsc, setIsTitleAsc] = useState(false);
  const { data, setData } = useData();

  useEffect(() => {
    const getData = () => {
    getMovies().then(value => {
      setData({
        status: 'success',
        data: value,
      });
    }).catch(err => {
      console.log('There is an error: ', err);
    });
  };
    getData();
  }, []);

  const OrderByAsc = prop => {
    if (prop === 'releaseYear') {
      data?.data.sort((a, b) => a.releaseYear - b.releaseYear);
      setIsYearAsc(prev => !prev);
    } else if (prop === 'title') {
      const SortArray = (a, b) => a.title.localeCompare(b.title);
      data?.data.sort(SortArray);
      setIsTitleAsc(prev => !prev);
    }
  };

  const OrderByDesc = prop => {
    if (prop === 'releaseYear') {
      data?.data.sort((a, b) => b.releaseYear - a.releaseYear);
      setIsYearAsc(prev => !prev);
    } else if (prop === 'title') {
      const SortArray = (a, b) => b.title.localeCompare(a.title);
      data?.data.sort(SortArray);
      setIsTitleAsc(prev => !prev);
    }
  };

  const cardsList = (data?.data && data?.data.length > 0) && data?.data.map((card, index) => (
    <Card
      key={index}
      title={card?.title}
      image={card?.images?.['Poster Art']?.url}
      alt={card?.title}
    />
  ));
  
  return (
    <HomeContainerStyled>
      <h1>Home</h1>
      <Hero />
      <button onClick={() => isYearAsc ? OrderByAsc('releaseYear') : OrderByDesc('releaseYear')}>Order By Year</button>
      <button onClick={() => isTitleAsc ? OrderByAsc('title') : OrderByDesc('title')}>Order By Title</button>
      <CardsContainerStyled>
        {data?.status === 'success' ? cardsList : <span>Loading...</span> }
      </CardsContainerStyled>
    </HomeContainerStyled>
  )
}

export default Home;

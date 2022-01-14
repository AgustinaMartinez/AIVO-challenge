import { useState, useEffect } from 'react';
import { Button, Card, Dropdown, Hero } from '../../components';
import { ChevronUp, ChevronDown } from '../../components/icons';
import { getMovies } from '../../services/movies.service';
import { useData } from '../../context/data.context';
import { buildOrderButtonTitle } from '../../utils';
import { useAuth0 } from '@auth0/auth0-react';
import {
  HomeContainerStyled,
  CardsContainerStyled,
  DropdownsStyled,
  OrderButtonsStyled,
  PStyled,
  H3Styled,
  LoadingStyled,
} from './home.styled';

const Home = () => {
  const [isYearAsc, setIsYearAsc] = useState(false);
  const [isTitleAsc, setIsTitleAsc] = useState(false);
  const [newData, setNewData] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [releaseYearOptions, setReleaseYearOptions] = useState([]);
  const [programTypeOptions, setProgramTypeOptions] = useState([]);
  const [numberElements, setNumberElements] = useState(10);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [filters, setFilters] = useState({
    releaseYear: null,
    programType: '',
  });

  const { data, setData } = useData();
  const { isAuthenticated } = useAuth0();

  const screenWidth = window.innerWidth;
  let cardsRendered = [];

  const dropdowns = [
    {
      id: 'releaseYear',
      header: 'Release Year',
      options: releaseYearOptions,
    },
    {
      id: 'programType',
      header: 'Program Type',
      options: programTypeOptions,
    },
  ];

  const buttons = [
    {
      id: 'year',
      title: 'Year',
    },
    {
      id: 'title',
      title: 'Title',
    },
  ];

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

  const getDropdownOptions = filteredProp => {
    const finalResult = [];
    const filteredPropOptions = [];

    const filteredPropsList = (data?.data && data?.data.length > 0) && data?.data.map(movie => movie[filteredProp]);

      if (filteredPropsList) {
        filteredPropsList.forEach(prop => {
          if (!filteredPropOptions.includes(prop)) {
            filteredPropOptions.push(prop);
            return;
          };
        });
      };

    finalResult.push(filteredPropOptions.sort((a, b) => a - b));
    filteredProp === 'releaseYear' ? finalResult[0].unshift(dropdowns[0]?.header) : finalResult[0].unshift(dropdowns[1]?.header);
    filteredProp === 'releaseYear' ? setReleaseYearOptions(finalResult[0]) : setProgramTypeOptions(finalResult[0]);
  };

  cardsRendered = data?.data.slice(0, numberElements);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data?.status === 'success') {
      getDropdownOptions('releaseYear');
      getDropdownOptions('programType');
    };
  }, [data?.status]);

  useEffect(() => {
    if (data?.status === 'success') {
      if (cardsRendered && cardsRendered.length === data?.data.length) {
        setShowMoreButton(false);
      };
    };
  }, [cardsRendered]);

  const loadMore = () => {
    setNumberElements(numberElements + numberElements);
  };
  
  const OrderByAsc = prop => {
    if (prop === 'releaseYear') {
      if (newData && (filteredData && filteredData.length > 0)) {
        filteredData.sort((a, b) => a.releaseYear - b.releaseYear);
      } else {
        data?.data.sort((a, b) => a.releaseYear - b.releaseYear);
      };
      setIsYearAsc(prev => !prev);
    } else if (prop === 'title') {
      const SortArray = (a, b) => a.title.localeCompare(b.title);

      if (newData && (filteredData && filteredData.length > 0)) {
        filteredData.sort(SortArray);
      } else {
        data?.data.sort(SortArray);
      };
      setIsTitleAsc(prev => !prev);
    };
  };

  const OrderByDesc = prop => {
    if (prop === 'releaseYear') {
      if (newData && (filteredData && filteredData.length > 0)) {
        filteredData.sort((a, b) => b.releaseYear - a.releaseYear);
      } else {
        data?.data.sort((a, b) => b.releaseYear - a.releaseYear);
      };
      setIsYearAsc(prev => !prev);
    } else if (prop === 'title') {
      const SortArray = (a, b) => b.title.localeCompare(a.title);

      if (newData && (filteredData && filteredData.length > 0)) {
        filteredData.sort(SortArray);
      } else {
        data?.data.sort(SortArray);
      };
      setIsTitleAsc(prev => !prev);
    };
  };

  const filter = (filter, value) => {
    setFilteredData([]);
    setNewData(false);

    let filteredResult;

    if (filter === 'releaseYear') {
      if(releaseYearOptions[0] === dropdowns[0]?.header) {
        releaseYearOptions.splice(0, 1);
      };

      setFilters(filters => ({ ...filters, releaseYear: value }));

      // if last search was a 'program type' (e.g. a movie), then search all movies of this selected year
      if (filters?.programType !== '') {
        filteredResult = (data?.data && data?.data.length > 0) && data?.data.filter(movie => (movie?.releaseYear === value) && (movie?.programType === filters?.programType));
      } else {
        filteredResult = (data?.data && data?.data.length > 0) && data?.data.filter(movie => (movie?.releaseYear === value));
      };
    } else {
      if (programTypeOptions[0] === dropdowns[1]?.header) {
        programTypeOptions.splice(0, 1);
      };

      setFilters(filters => ({ ...filters, programType: value }));

      // if last search was a 'release year' (e.g. 2015), then search all {selected program, e.g.: series} of that year
      if (filters?.releaseYear !== null) {
        filteredResult = (data?.data && data?.data.length > 0) && data?.data.filter(movie => (movie?.programType === value) && (movie?.releaseYear === filters?.releaseYear));
      } else {
        filteredResult = (data?.data && data?.data.length > 0) && data?.data.filter(movie => movie?.programType === value);
      };
    };

    setFilteredData(filteredResult);
    setNewData(true);
  };

  const handleOnChange = event => {
    const { id, value} = event?.target;

    if (id === 'releaseYear') {
      filter(id, parseInt(value, 10));
    } else {
      filter(id, value);
    };
  };

  const handleOrderButtonOnClick = button => {
    if (button === 'year') {
      isYearAsc ? OrderByAsc('releaseYear') : OrderByDesc('releaseYear');
    } else {
      isTitleAsc ? OrderByAsc('title') : OrderByDesc('title');
    };
  };

  const filterDropdowns = (
    dropdowns && dropdowns.map(dropdown => (
      <Dropdown
        key={dropdown?.id}
        id={dropdown?.id}
        name={dropdown?.id}
        items={dropdown?.options}
        onChange={handleOnChange}
      />
    ))
  );

  const orderButtons = (
    buttons && buttons.map(button => (
      <Button
        key={button?.id}
        id={button?.id}
        type='primary'
        width={screenWidth < 1400 ? '100px' : '300px'}
        title={buildOrderButtonTitle(button.title, isTitleAsc)}
        icon={(button?.id === 'year') && (isYearAsc ? <ChevronUp /> : <ChevronDown />)}
        onClick={() => handleOrderButtonOnClick(button?.id)}
      />
    ))
  );

  const cardsList = () => {
    return (
      !newData ? (
        (cardsRendered && cardsRendered.length > 0) && cardsRendered.map((card, index) => (
          <Card
            key={index}
            title={card?.title}
            image={card?.images?.['Poster Art']?.url}
            alt={card?.title}
          />
        )
      )) : (
        (filteredData && filteredData.length > 0) ? (
          filteredData.map((card, index) => (
            <Card
              key={index}
              title={card?.title}
              image={card?.images?.['Poster Art']?.url}
              alt={card?.title}
            />
          ))
        ) : <PStyled>There is any {filters?.programType} in year {filters?.releaseYear} 😕</PStyled>
      )
    );
  };
  
  return (
    <>
      {isAuthenticated && (
        <HomeContainerStyled>
          <h1>Home</h1>
          <Hero />
          <DropdownsStyled>
            {filterDropdowns}
          </DropdownsStyled>
          <OrderButtonsStyled>
            <p>Order by:</p>
            {orderButtons}
          </OrderButtonsStyled>
          <H3Styled>Last Added</H3Styled>
          <CardsContainerStyled>
            {data?.status === 'success'
              ? cardsList()
              : <LoadingStyled alt="loading" src="http://auxiliadoravaldivia.cl/colegio/load.gif" />
            }
            {(data?.status === 'success') && !newData && showMoreButton && (
              <Button
                id='see-more'
                type='secondary'
                title='Show More'
                width='100%'
                onClick={() => loadMore()}
              />
            )}
          </CardsContainerStyled>
        </HomeContainerStyled>
      )}
    </>
  );
};

export default Home;

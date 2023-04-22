import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Spinner } from '../../components/Spinner';

import { FetchSearchMovie } from '../../components/FetchData';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MoviesList } from '../../components/MoviesList/MoviesList';

import { MoviesContainer } from '../Movies/MoviesStyled';

const SearchMovies = () => {
  const [moviesItems, setMoviesItems] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const onSubmit = ({ search }) => {
    setSearchParams({ search });
    setMoviesItems([]);
  };

  useEffect(() => {
    if (!search) return;
    setLoading(true);
    const getSearchMovies = async () => {
      try {
        const searchMoviesResult = await FetchSearchMovie(search);
        setMoviesItems(searchMoviesResult.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getSearchMovies();
  }, [search]);

  return (
    <MoviesContainer>
      <SearchForm onSubmit={onSubmit} />
      {loading && <Spinner />}
      {error && <p>{error}</p>}
      <ul>{moviesItems.length > 0 && <MoviesList movies={moviesItems} />}</ul>
    </MoviesContainer>
  );
};

export default SearchMovies;
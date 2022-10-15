import { fetchMoviesByQuery } from 'ApiServices/movieApi';
import { useState } from 'react';

import { MovieList } from './../../components/MovieList/MovieList';
export const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesData, setMoviesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = event => {
    setQuery(event.target.value);
  };
  const fetchByQuery = async () => {
    try {
      setIsLoading(true);
      const { results } = await fetchMoviesByQuery(query);
      setMoviesData(results);
    } catch (error) {
      console.log(error);
      return alert(`Sorry, please try again`);
    } finally {
      setIsLoading(false);
    }
  };
  const onHandleSubmit = event => {
    event.preventDefault();
    fetchByQuery();
    setQuery('');
  };
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search movie</button>
      </form>
      {isLoading && <div>...Loading</div>}
      {moviesData && <MovieList moviesData={moviesData} />}
    </div>
  );
};

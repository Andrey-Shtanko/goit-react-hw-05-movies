import { MovieList } from 'components/MovieList/MovieList';
import { useEffect } from 'react';
import { useState } from 'react';
import { HomeTitle, HomeWrapper } from './Home.styled';
import { fetchTrandingMovies } from './../../ApiServices/movieApi';
export const Home = () => {
  const [moviesData, setMoviesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { results } = await fetchTrandingMovies();
        setMoviesData(results);
      } catch (error) {
        console.log(error);
        return alert(`Sorry, please try again`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);
  return (
    <HomeWrapper>
      <HomeTitle>Trending today</HomeTitle>
      {isLoading && <div>...Loading</div>}
      {moviesData && <MovieList moviesData={moviesData} />}
    </HomeWrapper>
  );
};

import { useState, useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Outlet, useParams } from 'react-router-dom';
import { BackButton } from './MovieDetails.styled';
import { fetchMovieById } from './../../ApiServices/movieApi';
import { MovieInfo } from './../MovieInfo/MovieInfo';

export const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const result = await fetchMovieById(movieId);
        setMovieData(result);
      } catch (error) {
        console.log(error);
        return alert(`Sorry, please try again`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);
  return (
    <div>
      <BackButton>
        <BiArrowBack />
        Go back
      </BackButton>
      {isLoading && <div>...Loading</div>}
      {movieData && <MovieInfo data={movieData} />}
      <Outlet />
    </div>
  );
};

import { Link } from 'react-router-dom';
import { MoviesList } from './MovieList.styled';
export const MovieList = ({ moviesData }) => {
  return (
    <MoviesList>
      {moviesData.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </MoviesList>
  );
};

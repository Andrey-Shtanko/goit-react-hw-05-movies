import { Link } from 'react-router-dom';
import { BarWrapper } from './AppBar.styled';

export const AppBar = () => {
  return (
    <BarWrapper>
      <Link to="home">Home</Link>
      <Link to="movie">Movie</Link>
    </BarWrapper>
  );
};

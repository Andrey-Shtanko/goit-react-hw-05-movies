import { InfoBox, MovieBox } from './MovieInfo.styled';

export const MovieInfo = ({ data }) => {
  const { poster_path, original_title, vote_average, overview, genres } = data;
  const genresNames = genres.map(genre => genre.name).join(` `);
  const posterUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;
  const rating = vote_average.toFixed(1) * 10;
  return (
    <MovieBox>
      <img src={posterUrl} alt={original_title} />
      <InfoBox>
        <h2>{original_title}</h2>
        <p>User Score: {rating}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresNames}</p>
      </InfoBox>
    </MovieBox>
  );
};

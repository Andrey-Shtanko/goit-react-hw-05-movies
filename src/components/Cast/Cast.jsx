import { fetchCastById } from 'ApiServices/movieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const Cast = () => {
  const [actors, setActors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        setIsLoading(true);
        const { cast } = await fetchCastById(movieId);
        setActors(cast);
        console.log(cast);
      } catch (error) {
        console.log(error);
        return alert(`Sorry, please try again`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <div>...is Loading</div>}
      {actors && (
        <ul>
          {actors.map(actor => {
            const actorPhoto = `https://image.tmdb.org/t/p/w200${actor.profile_path}`;
            return (
              <li key={actor.name}>
                <img src={actorPhoto} width="100" alt="" />
                <p>name:{actor.name}</p>
                <p>Character:{actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

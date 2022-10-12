const API_KEY = `1f500d9f06eb9497ae6be27946cb1f23`;
export const fetchMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  ).then(response => response.json());
};

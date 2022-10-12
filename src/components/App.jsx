import { Route, Routes } from 'react-router-dom';
import { Home } from './../pages/Home/Home';
import { Movie } from './../pages/Movies/Movies';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
        </Route>
      </Routes>
    </div>
  );
};

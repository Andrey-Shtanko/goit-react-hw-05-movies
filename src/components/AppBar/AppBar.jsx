import { BarWrapper, NavItem } from './AppBar.styled';

export const AppBar = () => {
  return (
    <BarWrapper>
      <NavItem to="/" end>
        Home
      </NavItem>
      <NavItem to="movie">Movie</NavItem>
    </BarWrapper>
  );
};

import { BarWrapper } from './AppBar.styled';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: red;
  }
`;
export const AppBar = () => {
  return (
    <BarWrapper>
      <NavItem to="home">Home</NavItem>
      <NavItem to="movie">Movie</NavItem>
    </BarWrapper>
  );
};

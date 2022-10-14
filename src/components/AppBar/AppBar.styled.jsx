import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BarWrapper = styled.nav`
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-bottom: 2px solid black;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  gap: 20px;
`;
export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: red;
    :hover {
      text-decoration: underline;
    }
  }
  :hover:not(.active),
  :focus:not(.active) {
    text-decoration: underline;
  }
`;

import { Outlet } from 'react-router-dom';
import { LayoutBox } from './Layout.styled';
import { AppBar } from './../AppBar/AppBar';
export const Layout = () => {
  return (
    <LayoutBox>
      <AppBar />
      <Outlet />
    </LayoutBox>
  );
};

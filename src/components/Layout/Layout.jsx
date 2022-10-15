import { Outlet } from 'react-router-dom';
import { LayoutBox } from './Layout.styled';
import { AppBar } from './../AppBar/AppBar';
import { Suspense } from 'react';
export const Layout = () => {
  return (
    <LayoutBox>
      <AppBar />
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </LayoutBox>
  );
};

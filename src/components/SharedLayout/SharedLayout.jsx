import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import Welcome  from 'components/Welcome/Welcome'

// import { useSelector } from "react-redux";

// import { selectIsLogin } from "../../redux/auth/auth-selectors";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Welcome />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Welcome  from 'components/Welcome/Welcome'

// import { useSelector } from "react-redux";

// import { selectIsLogin } from "../../redux/auth/auth-selectors";

const SharedLayout = () => {
  return (
    <>
      <Welcome />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

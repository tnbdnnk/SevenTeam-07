import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import Sidebar from '../Sidebar/Sidebar';
// import { Welcome } from 'components/Welcome/Welcome'

import css from './SharedLayout.module.css';

// import Welcome from "../Welcome/Welcome";

const SharedLayout = () => {

  return (
    <>
      {/* <Welcome /> */}
      <div className={css.wrapper}>
        <Suspense fallback={null}>
          <Sidebar />
          <div className={css.inner}>
              <Header />
              <Outlet />
            </div>
        </Suspense>
      </div>
    </>
  );
};



    // return (
    //     <>
    //         <Welcome />
    //         <Suspense fallback={<p>...Loading page</p>}>
    //             <Outlet />
    //         </Suspense>
    //     </>
    // )
// }


export default SharedLayout;

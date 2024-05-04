import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
// import { Welcome } from 'components/Welcome/Welcome'

// import Welcome from "../Welcome/Welcome";

const SharedLayout = () => {
  return (
    <>
      <Header />
      {/* <Welcome /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
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

import { useSelector } from "react-redux";
import { Suspense } from "react";
import { Outlet, Navigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";

import { selectIsLogin, selectToken } from "../../redux/auth/auth-selectors";

const PrivateRoute = ()=> {
    const isLogin = useSelector(selectIsLogin);
    const token = useSelector(selectToken);
    // console.log(isLogin);
    // console.log(token);

    const shouldRedirect = !isLogin && !token;

        return shouldRedirect ?
        <Navigate to='/login' /> :
        // <Navigate to='/login' />

    // if(!isLogin && token) {
    //     return <Navigate to="/home" />
    // }

    // if(!isLogin && !token) {
    //     return <Navigate to="/login" />
    // }

        <Suspense fallback={<div>Loading...</div>}>
            <Outlet/> 
         </Suspense>
}

export default PrivateRoute;

// РОзкоментувати весь код пізніше!!!!!!!!!!!!!!

// =================================================================



// import { useAuth } from 'hooks/useAuth';

// const PrivateRoute = () => {

//     // const {isLoggedIn, isRefreshing} = useAuth();
//     // const shouldRedirect = !isRefreshing && !isLoggedIn;
//     const isLoggedIn = true;
//     const isRefreshing = true;
//     const shouldRedirect = !isRefreshing && !isLoggedIn;
    
//     return shouldRedirect ?
//         <Navigate to='/home' /> :

//         <Suspense fallback={<div>Loading...</div>}>
//             <Outlet/> 
//         </Suspense>
// }


// export default PrivateRoute; 

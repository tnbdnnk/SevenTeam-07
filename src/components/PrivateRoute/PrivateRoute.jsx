// import { useSelector } from "react-redux";
import { Suspense } from "react";
import { Outlet, Navigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";

// import { selectIsLogin, selectToken } from "../../redux/auth/auth-selectors";

// const PrivateRoute = ()=> {
//     const isLogin = useSelector(selectIsLogin);
//     const token = useSelector(selectToken);

//     if(!isLogin && token) {
//         return <p>...Loading</p>
//     }

//     if(!isLogin && !token) {
//         return <Navigate to="/login" />
//     }

//     return <Outlet />
// }

// export default PrivateRoute;

// РОзкоментувати весь код пізніше!!!!!!!!!!!!!!

// =================================================================



// import { useAuth } from 'hooks/useAuth';

const PrivateRoute = () => {

    // const {isLoggedIn, isRefreshing} = useAuth();
    // const shouldRedirect = !isRefreshing && !isLoggedIn;
    const isLoggedIn = true;
    const isRefreshing = true;
    const shouldRedirect = !isRefreshing && !isLoggedIn;
    
    return shouldRedirect ?
        <Navigate to='/home' /> :

        <Suspense fallback={<div>Loading...</div>}>
            <Outlet/> 
        </Suspense>
}


export default PrivateRoute; 

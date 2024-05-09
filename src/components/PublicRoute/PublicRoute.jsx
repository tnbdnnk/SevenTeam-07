import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";


// import { selectIsLogin, selectToken } from "../../redux/auth/auth-selectors";

// const PublicRoute = ()=> {
    // const isLogin = useSelector(selectIsLogin);
    // const token = useSelector(selectToken);

    // if(!isLogin && token) {
    //     return <p>...Loading</p>
    // }

    // if(isLogin) {
    //     return <Navigate to="/first" />
    // }

//     return <Outlet />
// }

// export default PublicRoute;

// =================================================================



// import { useAuth } from 'hooks/useAuth';


const PublicRoute = () => {
    // const {isLoggedIn} = useAuth();
    // const isLoggedIn = true;
    const isLoggedIn = false;
    
    return isLoggedIn ?
        <Navigate to='/home' />
        :
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet/> 
        </Suspense> 
}


export default PublicRoute; 

import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { Toaster } from 'react-hot-toast';
import {useDispatch} from "react-redux";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ScreensPage = lazy(() => import('./components/ScreensPage/ScreensPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const LoginPage = lazy(() => import('./pages/AuthPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/AuthPage/RegisterPage'));

import { current } from "./redux/auth/auth-operations";

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import PublicRoute from "./components/PublicRoute/PublicRoute";

// const test = import.meta.env.VITE_API_TEST;

const App = () => {
    // console.log(test);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(current())
    }, [dispatch]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="auth/register" element={<RegisterPage />} />
            <Route path="auth/login" element={<LoginPage />} />
            <Route path="/" element={<PrivateRoute />}>
            <Route
                index
                path="/home"
                element={
                <SharedLayout>
                    <HomePage />
                </SharedLayout>
                }
            />
            <Route
                path="/home/:boardName"
                element={
                <SharedLayout>
                    <ScreensPage />
                </SharedLayout>
                }
            />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
        </Suspense>
    );
};

export default App;

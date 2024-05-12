import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ScreensPage = lazy(() => import('./components/ScreensPage/ScreensPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const LoginPage = lazy(() => import('./pages/AuthPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/AuthPage/RegisterPage'));

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import PublicRoute from "./components/PublicRoute/PublicRoute";

// const test = import.meta.env.VITE_API_TEST;

const App = () => {
  // console.log(test);

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

    // <Routes>
    //     <Route path="/welcome" element={<WelcomePage />} />
    //     <Route path="/auth/register" element={<RegisterPage />} />
    //     <Route path="/auth/login" element={<LoginPage />} />
    //     <Route element={<PrivateRoute />}>
    //         <Route path="/home" element={<SharedLayout><HomePage /></SharedLayout>} />
    //         <Route path="/home/:boardName" element={<SharedLayout><ScreensPage /></SharedLayout>} />
    //     </Route>
    //     <Route path="*" element={<ErrorPage />} />
    // </Routes>

    // <Routes>
    //     <Route path="/" element={<PublicRoute />} >
    //         <Route path="/welcome" element={<WelcomePage />}/>
    //         <Route path="auth/register" element={<RegisterPage />}/>
    //         <Route path="auth/login" element={<LoginPage />}/>
    //     </Route>
    //     <Route path="/" element={<PrivateRoute />}>
    //         <Route index path="/home" element={<SharedLayout><HomePage /></SharedLayout>}/>
    //         <Route path="/home/:boardName" element={<SharedLayout><ScreensPage /></SharedLayout>}/>
    //     </Route>
    //     <Route path="*" element={<ErrorPage />} />
    // </Routes>
  );
};

export default App;

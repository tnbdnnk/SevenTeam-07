import { useSelector, useDispatch } from "react-redux";

import LoginForm from "../../components/AuthForm/LoginForm"

import { NavLink } from "react-router-dom";

import {login} from "../../redux/auth/auth-operations";

import { selectAuthLoading, selectAuthError } from "../../redux/auth/auth-selectors";

// import WelcomeAuth from "../../components/Welcome/WelcomeAuth/WelcomeAuth";

// import styles from './login-page.module.css'
import styles from '../AuthPage/register-page.module.css'

const LoginPage = ()=> {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);

    const dispatch = useDispatch();

    const handleLogin = data => {
        dispatch(login(data));
    }

    return (
        <div className={styles.registerWrapper}>
            <div className={styles.register}>
            {/* <WelcomeAuth/> */}
            <div className={styles.blockRegister}>
            <NavLink to="/auth/register" className={styles.linkRegister}>Registration</NavLink>
      
            <NavLink to="/auth/login" className={styles.linkRegister}>Log In</NavLink>
            </div>
            {authLoading && <p>....Login in progress</p>}
            <LoginForm onSubmit={handleLogin} />
            {authError && <p style={{color: "red"}}>{authError}</p>}
            </div>
        </div>
    )
}

export default LoginPage;
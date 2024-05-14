import { useSelector, useDispatch } from "react-redux";

import { NavLink, Navigate } from "react-router-dom";

import RegisterForm from "../../components/AuthForm/RegisterForm";

import {signup} from "../../redux/auth/auth-operations";

import { 
    // selectAuthLoading, 
    selectAuthError, 
    selectIsLogin 
} from "../../redux/auth/auth-selectors";

// import WelcomeAuth from "../../components/Welcome/WelcomeAuth/WelcomeAuth";

import styles from './register-page.module.css'

const RegisterPage = ()=> {
    // const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);
    const isLogin = useSelector(selectIsLogin);

    const dispatch = useDispatch();

    const handleSignup = data => {
        dispatch(signup(data));
    }

    return (
        <main className={styles.registerWrapper}>
            <div className={styles.register}>
                <div className={styles.blockRegister}>
                    <div className={styles.navRegister}>   
                        <NavLink to="/auth/register" className={styles.authActivPage}>
                            Registration
                        </NavLink>
                        <NavLink to="/auth/login" className={styles.linkRegister}>
                            Log In
                        </NavLink>
                    </div>
                {/* {authLoading && <p>....Register in progress</p>} */}
                <RegisterForm onSubmit={handleSignup} />
                    {isLogin
                        ? <Navigate to="/home" />
                        : authError
                        && <p className={styles.authError} >
                            {authError}
                        </p>}
                </div>
            </div>
        </main>
    )
}

export default RegisterPage;
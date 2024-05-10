import { useSelector, useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";

import RegisterForm from "../../components/AuthForm/RegisterForm";

import {signup} from "../../redux/auth/auth-operations";

import { selectAuthLoading, selectAuthError } from "../../redux/auth/auth-selectors";

// import WelcomeAuth from "../../components/Welcome/WelcomeAuth/WelcomeAuth";

import styles from './register-page.module.css'

const RegisterPage = ()=> {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);

    const dispatch = useDispatch();

    const handleSignup = data => {
        dispatch(signup(data));
    }

    return (
        <main className={styles.registerWrapper}>
            <div className={styles.register}>
                <div className={styles.blockRegister}>
                    <div className={styles.navRegister}>   
                    <NavLink to="/auth/register" className={styles.authActivPage} >Registration</NavLink>
                    <NavLink to="/auth/login" className={styles.linkRegister}>Log In</NavLink>
                    </div>
                {authLoading && <p>....Register in progress</p>}
                <RegisterForm onSubmit={handleSignup} />
                {authError && <p style={{color: "red"}}>{authError}</p>}
                </div>
            </div>
        </main>
    )
}

export default RegisterPage;
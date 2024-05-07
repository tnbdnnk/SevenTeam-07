import { useSelector, useDispatch } from "react-redux";

import LoginForm from "../../components/AuthForm/LoginForm"

import {login} from "../../redux/auth/auth-operations";

import { selectAuthLoading, selectAuthError } from "../../redux/auth/auth-selectors";

import WelcomeAuth from "../../components/Welcome/WelcomeAuth/WelcomeAuth";

import styles from './login-page.module.css'

const LoginPage = ()=> {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);

    const dispatch = useDispatch();

    const handleLogin = data => {
        dispatch(login(data));
    }

    return (
        <div className={styles.loginwrapper}>
            <WelcomeAuth/>
            {authLoading && <p>....Login in progress</p>}
            <LoginForm onSubmit={handleLogin} />
            {authError && <p style={{color: "red"}}>{authError}</p>}
        </div>
    )
}

export default LoginPage;
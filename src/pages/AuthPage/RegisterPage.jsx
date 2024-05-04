import { useSelector, useDispatch } from "react-redux";

import RegisterForm from "../../components/AuthForm/RegisterForm";

import {signup} from "../../redux/auth/auth-operations";

import { selectAuthLoading, selectAuthError } from "../../redux/auth/auth-selectors";

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
            <h1>Please Sign Up</h1>
            {authLoading && <p>....Register in progress</p>}
            <RegisterForm onSubmit={handleSignup} />
            {authError && <p style={{color: "red"}}>{authError}</p>}
        </main>
    )
}

export default RegisterPage;
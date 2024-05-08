import { useState, useId } from "react";

// import styles from "./login-form.module.css";
import styles from "../AuthForm/register-form.module.css";

const INITIAL_STATE = {
    email: "",
    password: "",
};

const LoginForm = ({ onSubmit }) => {
    const [state, setState] = useState({ ...INITIAL_STATE });

    const handleChange = ({ target }) => {
        const { name, value, type, checked } = target;
        const newValue = type === "checkbox" ? checked : value;

        setState({
            ...state,
            [name]: newValue,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...state });
        reset();
    };

    const reset = () => {
        setState({ ...INITIAL_STATE });
    }

    const emailId = useId();
    const passwordId = useId();

    const { email, password } = state;

    return (
        <form className={styles.registerForm} onSubmit={handleSubmit}>
            <div className={styles.block}>
                <label htmlFor={emailId}></label>
                <input value={email} className={styles.registerInput} onChange={handleChange} type="email" name="email" placeholder="Enter your email" id={emailId} required />
            </div>
            <div className={styles.block}>
                <label htmlFor={passwordId}></label>
                <input value={password} className={styles.registerInput} onChange={handleChange} type="password" name="password" placeholder="Confirm a password" id={passwordId} required />
            </div>
            <button className={styles.btnRegister} type="submit">Log In Now</button>
        </form>
    )
}

export default LoginForm;
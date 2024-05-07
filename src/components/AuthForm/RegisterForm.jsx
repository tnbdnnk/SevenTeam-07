import { useState, useId } from "react";

import styles from "./register-form.module.css";

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
};

const RegisterForm = ({ onSubmit }) => {
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

    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();

    const { name, email, password } = state;

    return (
        <form className={styles.registerForm} onSubmit={handleSubmit}>
            <div className={styles.block}>
                <label htmlFor={nameId}></label>
                <input value={name} onChange={handleChange} name="name" placeholder="Enter your name" id={nameId} required />
            </div>
            <div className={styles.block}>
                <label htmlFor={emailId}></label>
                <input value={email} onChange={handleChange} type="email" name="email" placeholder="Enter your email" id={emailId} required />
            </div>
            <div className={styles.block}>
                <label htmlFor={passwordId}></label>
                <input value={password} onChange={handleChange} type="password" name="password" placeholder="Create a password" id={passwordId} required />
            </div>
            <button className={styles.btnRegister} type="submit">Register Now</button>
        </form>
    )
}

export default RegisterForm;
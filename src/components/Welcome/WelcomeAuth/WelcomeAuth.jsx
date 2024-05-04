import { NavLink } from "react-router-dom";

import styles from "./welcome-auth.module.css";

const WelcomeAuth = ()=> {
    return (
        <div className={styles.block}>
            <NavLink to="/register" className={styles.link}>Register</NavLink>
            |
            <NavLink to="/login" className={styles.link}>Login</NavLink>
        </div>
    )
}

export default WelcomeAuth;
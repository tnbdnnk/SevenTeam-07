import { NavLink } from "react-router-dom";

import styles from "./welcome-auth.module.css";

const WelcomeAuth = ()=> {
    return (
        <div className={styles.block}>
            <NavLink to="/auth/register" className={styles.linkAuthRegistration}>Registration</NavLink>
      
            <NavLink to="/auth/login" className={styles.linkAuthLogin}>Log In</NavLink>
        </div>
    )
}

export default WelcomeAuth;
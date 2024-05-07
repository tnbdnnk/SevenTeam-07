import { NavLink } from "react-router-dom";

import styles from "./welcome-auth.module.css";

const WelcomeAuth = ()=> {
    return (
        <div className={styles.block}>
            <NavLink to="/auth/register" className={styles.link}>Registration</NavLink>
      
            <NavLink to="/auth/login" className={styles.link}>Log In</NavLink>
        </div>
    )
}

export default WelcomeAuth;
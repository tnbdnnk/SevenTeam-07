import {useSelector } from "react-redux";

// import { logout } from "../../../redux/auth/auth-operations";

import { selectUser } from "../../../redux/auth/auth-selectors";

import styles from "./welcom-user.module.css";

const WelcomeUser = ()=> {
    const {name} = useSelector(selectUser);

    // const dispatch = useDispatch();

    // const onLogout = ()=> dispatch(logout());

    return (
        <div className={styles.block}>
            {name} 
            {/* <button onClick={onLogout} className={styles.logout_button}>Logout</button> */}
        </div>
    )
}

export default WelcomeUser;
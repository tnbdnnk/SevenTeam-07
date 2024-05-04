import { useSelector } from "react-redux";

import WelcomeMenu from "./WelcomeMenu/WelcomeMenu";
import WelcomeAuth from "./WelcomeAuth/WelcomeAuth";
// import WelcomeUser from "./WelcomeUser/WelcomeUser";

import ScreensPage from "../ScreensPage/ScreensPage"

import { selectIsLogin } from "../../redux/auth/auth-selectors";

import styles from "./welcome.module.css";

export const Welcome = ()=> {
    const isLogin = useSelector(selectIsLogin);
    
    return (
        <navbar className={styles.navbar}>
            <WelcomeMenu />
            {isLogin ? <ScreensPage /> : <WelcomeAuth />}
        </navbar>
    )
}

// export default Welcome;
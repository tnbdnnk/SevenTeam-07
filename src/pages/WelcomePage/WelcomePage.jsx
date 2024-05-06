import { useSelector } from "react-redux";
import styles from './welcome-page.module.css'
import { selectIsLogin } from "../../redux/auth/auth-selectors";
import WelcomeAuth from "../../components/Welcome/WelcomeAuth/WelcomeAuth";
import WelcomeUser from "../../components/Welcome/WelcomeUser/WelcomeUser";
const WelcomePage = ()=> {
    const isLogin = useSelector(selectIsLogin);
    return (
        
        <div>
        <h1>Task Pro</h1>
        <p>Supercharge your productivity and take control of your tasks with Task Pro - Dont wait, start achieving your goals now!</p>
        <navbar className={styles.navbar}>
        {isLogin ? <WelcomeUser /> : <WelcomeAuth />}   
        </navbar>
        </div>
    )
}
export default WelcomePage;
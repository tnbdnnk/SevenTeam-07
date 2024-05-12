import { useSelector } from 'react-redux';
import styles from './welcome-page.module.css';
import { selectIsLogin } from '../../redux/auth/auth-selectors';
import WelcomeAuth from '../../components/Welcome/WelcomeAuth/WelcomeAuth';
// import WelcomeUser from '../../components/Welcome/WelcomeUser/WelcomeUser';

import welcomepageemoji from '/src/images/welcompage-emoji.svg';
import icons from 'src/images/symbol-defs.svg';

import { Outlet, Navigate } from 'react-router-dom';
import { Suspense } from 'react';

const WelcomePage = () => {
    const isLogin = useSelector(selectIsLogin);
    return (
        <div className={styles.welcomeWrapper}>
            <div className={styles.welcomeTitleWrapper}>
            <img
                src={welcomepageemoji}
                alt=""
                className={styles.welcomeImg}
                width="124"
                height="124"
            />
            <div className={styles.welcomeSvgWrapper}>
                <svg className={styles.welcomeSvg} width="40" height="40">
                <use
                    className={styles.welcomeUse}
                    href={icons + '#icon-logo-icon-black'}
                    width="40" 
                    height="40"
                ></use>
                </svg>
                <h1 className={styles.welcomeTitle}>Task Pro</h1>
            </div>
            </div>
            <p className={styles.welcomeText}>
              Supercharge your productivity and take control of your tasks with Task
              Pro - Dont wait, start achieving your goals now!
            </p>
            <nav className={styles.navbar}>
              {isLogin ? <Navigate to="/home"/>: <WelcomeAuth/>}
          </nav>
          <Suspense fallback={null}> 
            <Outlet />
          </Suspense>
          </div>
  );
};
export default WelcomePage;

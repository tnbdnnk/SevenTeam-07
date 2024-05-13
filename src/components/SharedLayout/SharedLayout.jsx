import { Suspense, useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Loader from '../Loader/Loader';

import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/auth-selectors';

import css from './SharedLayout.module.css';
import cssSidebar from '../Sidebar/sidebar.module.css';


const Overlay = ({ onClick }) => (
  <div className={cssSidebar.overlay} onClick={onClick}></div>
);


const SharedLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { theme } = useSelector(selectUser);
  
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
  
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
  
    useEffect(() => {
        if (isSidebarOpen) {
          openSidebar()
        }
    }, [isSidebarOpen]);

    return (
        <>
            <div className={[css.wrapper, css[theme]].join(' ')}>
                <Suspense fallback={<Loader />}>
                    {isSidebarOpen ? (
                        <>
                            <Overlay onClick={closeSidebar} />
                            <Sidebar className={cssSidebar.visible}/>
                        </>
                    ) : <Sidebar />}
                    <div className={css.inner}>
                        <Header openBurger={openSidebar} />
                        { children }
                    </div>
                </Suspense>
            </div>
        </>
    );
};


export default SharedLayout;

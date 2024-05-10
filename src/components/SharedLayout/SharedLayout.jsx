import { Suspense, useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Loader from '../Loader/Loader';

import css from './SharedLayout.module.css';
import cssSidebar from '../Sidebar/sidebar.module.css';


const Overlay = ({ onClick }) => (
  <div className={cssSidebar.overlay} onClick={onClick}></div>
);


const SharedLayout = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const openSidebar = () => {
        console.log('open sidebar')
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
            <div className={css.wrapper}>
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

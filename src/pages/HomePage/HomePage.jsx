import { useState, useEffect } from 'react';
import { useModal } from "../../hooks/useModal.js";

import Filters from '../../components/Filters/Filters';
import { Header } from '../../components/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar';
import Modal from '../../helpers/ModalWindow/Modal.jsx';
import { NewBoard } from '../../components/Sidebar/ModalBoards/ModalBoards.jsx';

import css from './HomePage.module.css';
import cssSidebar from '../../components/Sidebar/sidebar.module.css'
import { Outlet } from 'react-router-dom';

// Overlay for sidebar
const Overlay = ({ onClick }) => (
  <div className={cssSidebar.overlay} onClick={onClick}></div>
);

const HomePage = () => {

    const { isModalOpen, openModal, closeModal } = useModal();

    // Функціонал для відкриття sidebar -----------
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
    openSidebar()  }
  }, [isSidebarOpen]);
    // ------------------

    return (<div className={css.homePage}>
        {isSidebarOpen ? (
            <>
            <Overlay onClick={closeSidebar} />
            <Sidebar className={cssSidebar.visible}/>
            </>
        ) : <Sidebar />}
<div>
        <Header openBurger={openSidebar} />
        <div className={css.inner}>
            <section className={css.section}>
            <div className={css.settingsWrapper}>
                <Filters />
            </div>

            <div className={css.textWrapper}>
                <p className={css.text}>
                    Before starting your project, it is essential
                    <a onClick={openModal} className={css.link}> to create a board</a> to
                    visualize and track all the necessary tasks and milestones. This
                    board serves as a powerful tool to organize the workflow and
                    ensure effective collaboration among team members.
                    </p>
                <Modal isOpen={isModalOpen} onClose={closeModal}>{ <NewBoard/>}</Modal>
            </div>
        </section>
            </div>
            <Outlet/>
            </div>
        
        </div>
    );
};


export default HomePage;

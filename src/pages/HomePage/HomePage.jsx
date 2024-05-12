import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useModal } from "../../hooks/useModal.js";
import { NewBoard } from '../../components/Sidebar/ModalBoards/ModalBoards.jsx';
import { selectAllBoardsList } from '../../redux/boards/boards-selectors.js';
import Filters from '../../components/Filters/Filters';
import Modal from '../../helpers/ModalWindow/Modal.jsx';
// import Loader from '../../components/Loader/Loader.jsx';

import css from './HomePage.module.css';


const HomePage = () => {
    
    const boardList = useSelector(selectAllBoardsList);
    const { isModalOpen, openModal, closeModal } = useModal();
    
    console.log(boardList);
    
    return (
        <>
            {boardList.length > 0 ? <Navigate to={`/home/${boardList[0]._id}`} /> : (
                <section className = {css.section} >
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
                </section > 
            )}
        </>
    );
};


export default HomePage;

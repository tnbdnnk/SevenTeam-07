import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useModal } from "../../../hooks/useModal.js";
import Modal from "../../../helpers/ModalWindow/Modal.jsx";
import { EditBoard } from "../../../components/Sidebar/ModalBoards/ModalBoards.jsx";
import { deleteBoard } from "../../../redux/boards/boards-operations.js";
import { selectUser } from "../../../redux/auth/auth-selectors.js";
import { selectAllBoardsList, selectBoard } from "../../../redux/boards/boards-selectors.js";

import css from "./boardList.module.css";
import sprite from "../../../images/symbol-defs.svg";


const BoardList = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector(selectUser);
    const boardList = useSelector(selectAllBoardsList);
    const selectedBoard = useSelector(selectBoard);
    const { isModalOpen, openModal, closeModal } = useModal();
    
    const [currentBoard, setCurrentBoard] = useState(selectedBoard || (boardList.length > 0 ? boardList[0] : null));
    const activeBoard = selectedBoard ? selectedBoard : boardList.length > 0 ? boardList[0] : null;

    const handleDeleteBoard = (id) => {
        dispatch(deleteBoard(id));
    }

    const list = boardList.map(item => (
        <li
            key={item._id}
            className={activeBoard._id === item._id ? `${css.item} ${css.active}` : css.item}
        >
            <Link to={`/home/${item._id}`} className={[css.boardLink, css[theme]].join(' ')}>
                <div className={css.boardInfo}>
                    <svg 
                        width="18" 
                        height="18" 
                        className={[css.boardIcon, css[theme]].join(' ')}
                    >
                        <use href={sprite + item.icons}></use>
                    </svg>
                    <h3 className={css.boardTitle}>{item.title}</h3>
                </div>
                <div className={css.boardSettings}>
                    <span onClick={() => { setCurrentBoard(item); openModal(); }}>
                        <svg 
                            className={[css.boardSettingsSvgPen, css[theme]].join(' ')} 
                            width="16" 
                            height="16"
                        >
                            <use href={sprite + '#icon-pen'}></use>
                        </svg>
                    </span>
                    <span onClick={() => handleDeleteBoard(item._id)}>
                        <svg 
                            className={[css.boardSettingsSvgTrash, css[theme]].join(' ')} 
                            width="16" 
                            height="16"
                        >
                            <use href={sprite + '#icon-trash'}></use>
                        </svg>
                    </span>
                </div>
            </Link>
        </li>
    ));

    return (
        <>
            <ul className={[css.list, css[theme]].join(' ')}>{list}</ul>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {currentBoard && <EditBoard boardData={currentBoard} onClose={closeModal}/>}
            </Modal>
        </>
    );
}


export default BoardList;

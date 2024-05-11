import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useModal } from "../../../hooks/useModal.js";
import Modal from "../../../helpers/ModalWindow/Modal.jsx"
import {EditBoard} from '../../../components/Sidebar/ModalBoards/ModalBoards.jsx'

import css from "./boardList.module.css"
import sprite from '../../../images/symbol-defs.svg'

// import { getAllBoards } from '../../redux/boards/board-operations.js';
import { useSelector } from 'react-redux';
import {selectAllBoardsList} from '../../../redux/boards/bords-selectors.js'


const BoardList = () => {

  const boardList = useSelector(selectAllBoardsList);
  console.log(boardList);

  const [activeBoard, setActiveBoard] = useState("");
  const handleBoardClick = (board) => {
  setActiveBoard(board);
  };

  useEffect(() => {
    if (boardList.length > 0) {
      setActiveBoard(boardList[0]);
    }
  }, []);

    const { isModalOpen, openModal, closeModal } = useModal();

  const list = items.map(item => {
    // const boardName = item.title.replace(' ', '').toLowerCase();

    return (
      <li key={item.id} className={activeBoard.id === item.id ? `${css.item} ${css.active}` : css.item}>
        {/* <NavLink to={`/home/:${boardName}`} className={({ isActive }) =>
          isActive ? `${css.active}` : `${css.link}`}>
            {item.name}
        </NavLink> */}
      <Link to={`/home/${item.id}`} className={css.boardLink} onClick={() => handleBoardClick(item)}>
      <div className={css.boardInfo}>
        <svg width="18" height="18" className={css.boardIcon}><use href={sprite + item.icons}></use></svg>
        <h3>{item.title}</h3>
      </div>
      <div className={css.boarSettings}>
          <span onClick={openModal}><svg className={css.boarSettingsSvg} width="16" height="16">
            <use href={sprite + '#icon-pen'}></use></svg></span>
        <span><svg className={css.boarSettingsSvg} width="16" height="16"><use href={sprite + '#icon-trash'}></use></svg></span>
      </div>
      </Link>
      <Modal isOpen={isModalOpen} onClose={closeModal}>{<EditBoard boardData={activeBoard} />}</Modal>
      
      </li>)
  })
  return <ul className={css.list}>{list}</ul>;
}

export default BoardList;
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useModal } from "../../../hooks/useModal.js";
import Modal from "../../../helpers/ModalWindow/Modal.jsx"
import {EditBoard} from '../../../components/Sidebar/ModalBoards/ModalBoards.jsx'

import css from "./boardList.module.css"
import sprite from '../../../images/symbol-defs.svg'


const BoardList = ({ items }) => {

  const [activeBoard, setActiveBoard] = useState(items[0]);
  const handleBoardClick = (board) => {
  setActiveBoard(board);
  };

    const { isModalOpen, openModal, closeModal } = useModal();

  const list = items.map(item => {
    // const boardName = item.title.replace(' ', '').toLowerCase();

    return (
      <li key={item.id} className={activeBoard.id === item.id ? `${css.item} ${css.active}` : css.item}>
        {/* <NavLink to={`/home/:${boardName}`} className={({ isActive }) =>
          isActive ? `${css.active}` : `${css.link}`}>
            {item.name}
        </NavLink> */}
      <Link to={`/home/:${item.id}`} className={css.boardLink} onClick={() => handleBoardClick(item)}>
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
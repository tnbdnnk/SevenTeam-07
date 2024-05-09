import LogoComponent from "./LogoComponent/LogoComponent"
import BoardList from "./BoardList/BoardList"
import NeedHelp from "./NeedHelp/NeedHelp"
// import { useEffect, useRef } from "react";
// Для модалки
import { useModal } from "../../hooks/useModal.js";
import Modal from "../../helpers/ModalWindow/Modal.jsx"
import {NewBoard} from './ModalBoards/ModalBoards.jsx'

import css from './sidebar.module.css';
import icons from '../../images/symbol-defs.svg';
// Брати потім з бека
const exampleBoardList = [{ id: 1, title: "First board", icons:"#icon-four-balls", background:"bg3"}, { id: 2, title: "Second board", icons:'#icon-puzzle', background:"bg4"}, { id: 3, title: "Third board", icons:"#icon-star", background:"bg12"}, ]

const Sidebar = ({ className }) => {
// для модалки
  const { isModalOpen, openModal, closeModal } = useModal();

  return <aside className={`${css.sidebar} ${className}`}>
    <div className={css.partSidebar}>
    <LogoComponent />
    <h3 className={css.text}>My boards</h3>
    <div className={css.createBox}>
      <p className={css.createText}>Create a new board</p>
      <button className={css.createBtn} type="button"   onClick={openModal}>
      <svg className={css.iconPlus} width="20" height="20">
      <use href={icons + '#icon-plus'}></use>
    </svg></button></div>
    </div>
    <Modal isOpen={isModalOpen} onClose={closeModal}>{ <NewBoard/>}</Modal>

    <BoardList items={exampleBoardList} />
    <div className={css.partSidebar}>
    <NeedHelp />
    <button className={css.logoutBtn}>
      <svg className={css.iconLogout} width="32" height="32"><use href={icons + '#icon-logout'}></use></svg>
        Log out</button>
    </div>
  </aside>
}

export default Sidebar;
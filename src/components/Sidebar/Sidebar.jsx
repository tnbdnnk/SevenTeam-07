import LogoComponent from "./LogoComponent/LogoComponent"
import BoardList from "./BoardList/BoardList"
import NeedHelp from "./NeedHelp/NeedHelp"

// Для модалки
import { useModal } from "../../hooks/useModal.js";
import Modal from "../../helpers/ModalWindow/Modal.jsx"

import css from './sidebar.module.css'
// Брати потім з бека
const exampleBoardList = [{ id: 1, name: "First board"}, { id: 1, name: "Second board"}, ]

const Sidebar = () => {
// для модалки
  const { isModalOpen, openModal, closeModal } = useModal();

  return <aside className={css.sidebar}>
    <LogoComponent />
    <h3 className={css.text}>My boards</h3>
    <div className={css.createBox}>
      <p className={css.createText}>Create a new board</p>
      <button className={css.createBtn} type="button"   onClick={openModal}>
      <svg width="20" height="20">
        </svg></button></div>

    <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>

    <BoardList items={exampleBoardList} />
    <NeedHelp />
    <button className={css.logoutBtn}><svg width="32" height="32"/>Log out</button>
  </aside>
}

export default Sidebar;
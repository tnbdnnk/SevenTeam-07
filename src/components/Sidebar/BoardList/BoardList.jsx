import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useModal } from "../../../hooks/useModal.js";
import Modal from "../../../helpers/ModalWindow/Modal.jsx"
import {EditBoard} from '../../../components/Sidebar/ModalBoards/ModalBoards.jsx'
import {deleteBoard} from "../../../redux/boards/boards-operations.js"
import css from "./boardList.module.css"
import sprite from '../../../images/symbol-defs.svg'

import { useSelector } from 'react-redux';
import { selectAllBoardsList, selectBoard } from '../../../redux/boards/boards-selectors.js'
import { selectUser } from '../../../redux/auth/auth-selectors.js';


const BoardList = () => {
const { theme } = useSelector(selectUser);
  const boardList = useSelector(selectAllBoardsList);
  // Витягую активну дошку
  const selectedBoard = useSelector(selectBoard);

  const activeBoard = selectedBoard ? selectedBoard : boardList.length > 0 ? boardList[0] : null;


  const { isModalOpen, openModal, closeModal } = useModal();
  
  const dispatch = useDispatch();
  const handleDeleteBord = async (id) => {
    try {
      console.log("id for delete",id)
      await dispatch(deleteBoard(id));
    } catch (error) {
      console.error("Помилка при видалені борди:", error);
    }
  }

  const list = boardList.map(item => {
    return (
      <li key={item._id} className={activeBoard._id === item._id ? `${css.item} ${css.active}` : css.item}>
      <Link to={`/home/${item._id}`} className={[css.boardLink, css[theme]].join(' ')} >
      <div className={css.boardInfo}>
        <svg width="18" height="18" className={[css.boardIcon, css[theme]].join(' ')}><use href={sprite + item.icons}></use></svg>
        <h3>{item.title}</h3>
      </div>
      <div className={css.boarSettings}>
          <span onClick={openModal}><svg className={[css.boarSettingsSvg, css[theme]].join(' ')} width="16" height="16">
            <use href={sprite + '#icon-pen'}></use></svg></span>
        <span onClick={() => handleDeleteBord(item._id)}><svg className={[css.boarSettingsSvg, css[theme]].join(' ')} width="16" height="16"><use href={sprite + '#icon-trash'}></use></svg></span>
      </div>
      </Link>
      
      </li>)
  })
  return <><ul className={[css.list, css[theme]].join(' ')}>{list}</ul>
    <Modal isOpen={isModalOpen} onClose={closeModal}>{<EditBoard boardData={activeBoard} onClose={closeModal} />}</Modal>
      
  </>;
}

export default BoardList;
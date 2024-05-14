import css from "./need-help.module.css"
import icons from '../../../images/symbol-defs.svg';
import { useModal } from "../../../hooks/useModal";
import NeedHelpModal from "./NeedHelp.modal";
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';

const NeedHelp = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { theme } = useSelector(selectUser);

  return <div className={[css.needHelpBox, css[theme]].join(' ')}>
    <div className={css.cactusBox}></div>
    <p>If you need help with <br /> <span>TaskPro</span>, check out our support resources or reach out to our customer support team</p>
    <button onClick={openModal} className={css.btn}>
      <svg className={css.icon} width="20" height="20">
        <use href={icons + '#icon-help-circle'}></use>
      </svg>
      Need help?
    </button>
    {isModalOpen && <NeedHelpModal isOpen={isModalOpen} closeModal={closeModal}/>}
  </div>
}
export default NeedHelp;
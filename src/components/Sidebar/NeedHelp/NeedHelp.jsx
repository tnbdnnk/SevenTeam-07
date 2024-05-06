import css from "./need-help.module.css";
import { useModal } from "../../../hooks/useModal";
import NeedHelpModal from "./NeedHelp.modal";

const NeedHelp = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return <div className={css.box}>
    <img src="" alt="cactus" />
    <p>If you need help with  <span>TaskPro</span>, check out our support resources or reach out to our customer support team</p>
    <button onClick={openModal}>Need help?</button>
    {isModalOpen && <NeedHelpModal onClose={closeModal} />}
  </div>
}
export default NeedHelp
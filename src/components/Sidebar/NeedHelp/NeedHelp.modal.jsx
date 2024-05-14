import Modal from "../../../helpers/ModalWindow/Modal";
import css from "./need-help.module.css"
import {
  // useSelector,
  useDispatch
} from 'react-redux';
import { sendHelp } from "../../../redux/auth/auth-operations";
// import { selectToken } from "../../../redux/auth/auth-selectors";


const NeedHelpModal = ({ isOpen, closeModal }) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
        email: e.currentTarget.elements.email.value,
        text: e.currentTarget.elements.text.value,
      };

      try {
        dispatch(sendHelp(formData));
        console.log("Request sent successfully");
        closeModal();
      } catch (error) {
        console.error("Error sending help request:", error.message);
      }
    };

    const handleClose = () => {
        closeModal();
    };

    return (
        <Modal className={css.needHelpBox} isOpen={isOpen} onClose={handleClose}>
            <h3 className={css.title}>Need Help</h3>
            <form onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                />
                <textarea
                    className={`${css.input} ${css.textarea}`}
                    name="text"
                    placeholder="Comment"
                    required
                ></textarea>
                <button className={css.btnSend} type="submit">Send</button>
            </form>
        </Modal>
    );
};

export default NeedHelpModal;
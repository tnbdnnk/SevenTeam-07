import Modal from "../../../helpers/ModalWindow/Modal";
import css from "./need-help.module.css"
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { sendHelp } from "../../../redux/auth/auth-operations";
// import { selectToken } from "../../../redux/auth/auth-selectors";
import { selectUser } from "../../../redux/auth/auth-selectors";
import toast from "react-hot-toast";

const NeedHelpModal = ({ isOpen, closeModal }) => {
  const { theme } = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
        email: e.currentTarget.elements.email.value,
        text: e.currentTarget.elements.text.value,
      };

      try {
        dispatch(sendHelp(formData));
        closeModal();
        toast.success(<div style={{ textAlign: 'center' }}>Message sent.<br/>We'll get back to you shortly</div>);
      } catch (error) {
        console.error("Error sending help request:", error.message);
        toast.error('Ooops, there was an error...', {
        style: {
          border: '1px solid #713200',
          padding: '10px',
          color: '#713200',
          fontWeight: 700,
        },
      });
      }
    };

    const handleClose = () => {
        closeModal();
    };

    return (
        <Modal className={css.needHelpBox} isOpen={isOpen} onClose={handleClose}>
            <h3 className={[css.title, css[theme]].join(' ')}>Need Help</h3>
            <form onSubmit={handleSubmit}>
                <input
                    className={[css.input, css[theme]].join(' ')}
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                />
                <textarea
                    className={[css.input, css.textarea, css[theme]].join(' ')}
                    name="text"
                    placeholder="Comment"
                    required
                ></textarea>
                <button className={[css.btnSend, css[theme]].join(' ')} type="submit">Send</button>
            </form>
        </Modal>
    );
};

export default NeedHelpModal;
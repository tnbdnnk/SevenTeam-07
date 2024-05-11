import Modal from "../../../helpers/ModalWindow/Modal";
import { useSelector, useDispatch } from 'react-redux';
import { sendHelp } from "../../../redux/auth/auth-operations";
import { selectToken } from "../../../redux/auth/auth-selectors";


const NeedHelpModal = ({ isOpen, closeModal }) => {
    const dispatch = useDispatch();

    const token = useSelector(selectToken);

    const handleSubmit = (e) => {
    e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
        formData,
        token
    };
    try {
        dispatch(sendHelp(data));
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
        <Modal isOpen={isOpen} onClose={handleClose}>
            <h3>Need Help</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                />
                <textarea
                    name="text"
                    placeholder="Comment"
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </Modal>
    );
};

export default NeedHelpModal;
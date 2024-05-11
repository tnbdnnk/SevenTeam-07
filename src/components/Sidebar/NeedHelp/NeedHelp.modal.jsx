import Modal from "../../../helpers/ModalWindow/Modal";
import { useDispatch } from 'react-redux';
import { useModal } from "../../../hooks/useModal";
import { sendHelpRequest } from "../../../api/auth-api";

const NeedHelpModal = () => { 
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        dispatch(sendHelpRequest(formData));
        console.log(response.data);
        closeModal();
    };

    return (
        <Modal>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="userEmail"
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
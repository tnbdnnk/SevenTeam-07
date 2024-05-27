import { useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/auth/auth-selectors.js';
import Modal from '../../../../helpers/ModalWindow/Modal.jsx';
import css from './DeleteCardModal.module.css';


const DeleteCardModal = ({ isModalOpen, closeModal, onConfirmDelete }) => {
    const { theme } = useSelector(selectUser);

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className={css.modalContent}>
                {/* <h2 className={[css.modalHeader, css[theme]].join(' ')}>Delete Card</h2> */}
                <p className={[css.modalText, css[theme]].join(' ')}>
                    Are you sure you want to delete this card?
                </p>
                <div className={[css.buttonGroup, css[theme]].join(' ')}>
                    {/* <button className={[css.cancelButton, css[theme]].join(' ')} onClick={closeModal}>
                        Cancel
                    </button> */}
                    <button className={[css.deleteButton, css[theme]].join(' ')} onClick={onConfirmDelete}>
                        Delete
                    </button>
                    <button className={[css.cancelButton, css[theme]].join(' ')} onClick={closeModal}>
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteCardModal;

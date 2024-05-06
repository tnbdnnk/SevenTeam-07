import Modal from "../../../helpers/ModalWindow/Modal";
import { useSelector } from 'react-redux';
import { selectToken } from "../../../redux/auth/auth-selectors";

const NeedHelpModal = () => { 

    const token = useSelector(selectToken);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = {
            email: e.currentTarget.elements.userEmail.value,
            comment: e.currentTarget.elements.text.value,
            };
            
            e.currentTarget.reset();

            const response = await fetch("/help", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });
        } catch (error) {
            console.error("Error sending data to the backend:", error);
        }
    };

    return (
        <Modal>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="userEmail"
                    placeholder="Email address"
                />
                <textarea
                    name="text"
                    placeholder="Comment"
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </Modal>
    );
};

export default NeedHelpModal;
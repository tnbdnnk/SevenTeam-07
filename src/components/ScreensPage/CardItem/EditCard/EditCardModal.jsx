import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { editCard } from '../../../../redux/boards/boards-operations';
import { selectUser } from '../../../../redux/auth/auth-selectors';
import Modal from '../../../../helpers/ModalWindow/Modal.jsx';
import css from '../EditCard/EditCardModal.module.css';
import sprite from '../../../../images/symbol-defs.svg';

const EditCardModal = ({ isModalOpen, closeModal, card }) => {
    const dispatch = useDispatch();
    const { theme } = useSelector(selectUser);
    const { _id, title, description, label, deadline } = card;

    const { register, handleSubmit, setValue, watch } = useForm({
            defaultValues: {
            title,
            description,
            label,
            deadline: deadline ? new Date(deadline) : null,
        },
    });

    const onSubmit = async (data) => {
        const updatedCard = {
            title: data.title,
            description: data.description,
            label: data.label,
            deadline: data.deadline ? data.deadline.toISOString() : null,
        };
        try {
            await dispatch(editCard({ id: _id, updatedCard }));
            closeModal();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2 className={[css.modalHeader, css[theme]].join(' ')}>Edit Card</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                {...register('title', { required: true })}
                placeholder="Card title"
                className={[css.title, css[theme]].join(' ')}
            />
            <textarea
                {...register('description')}
                placeholder="Description"
                className={[css.description, css[theme]].join(' ')}
            />
            <p className={[css.mainText, css[theme]].join(' ')}>Priority</p>
            <ul className={css.priorityList}>
                <li className={css.priorityDataWrap}>
                <label>
                    <input type="radio" {...register('label')} value="without" />
                    {watch('label') === 'without' ? (
                    <div className={css.container}>
                        <div
                        className={[css.active, css[theme], css.without].join(
                            ' '
                        )}
                        ></div>
                        <span className={[css.textChecked, css[theme]].join(' ')}>
                        Without
                        </span>
                    </div>
                    ) : (
                    <div className={css.container}>
                        <div className={[css.circle, css.without].join(' ')}></div>
                        <span className={[css.text, css[theme]].join(' ')}>
                        Without
                        </span>
                    </div>
                    )}
                </label>
                </li>

                <li className={css.priorityDataWrap}>
                <label>
                    <input type="radio" {...register('label')} value="low" />
                    {watch('label') === 'low' ? (
                    <div className={css.container}>
                        <div
                        className={[css.active, css[theme], css.low].join(' ')}
                        ></div>
                        <span className={[css.textChecked, css[theme]].join(' ')}>
                        Low
                        </span>
                    </div>
                    ) : (
                    <div className={css.container}>
                        <div className={[css.circle, css.low].join(' ')}></div>
                        <span className={[css.text, css[theme]].join(' ')}>
                        Low
                        </span>
                    </div>
                    )}
                </label>
                </li>

                <li className={css.priorityDataWrap}>
                <label>
                    <input type="radio" {...register('label')} value="medium" />
                    {watch('label') === 'medium' ? (
                    <div className={css.container}>
                        <div
                        className={[css.active, css[theme], css.medium].join(' ')}
                        ></div>
                        <span className={[css.textChecked, css[theme]].join(' ')}>
                        Medium
                        </span>
                    </div>
                    ) : (
                    <div className={css.container}>
                        <div className={[css.circle, css.medium].join(' ')}></div>
                        <span className={[css.text, css[theme]].join(' ')}>
                        Medium
                        </span>
                    </div>
                    )}
                </label>
                </li>

                <li className={css.priorityDataWrap}>
                <label>
                    <input type="radio" {...register('label')} value="high" />
                    {watch('label') === 'high' ? (
                    <div className={css.container}>
                        <div
                        className={[css.active, css[theme], css.high].join(' ')}
                        ></div>
                        <span className={[css.textChecked, css[theme]].join(' ')}>
                        High
                        </span>
                    </div>
                    ) : (
                    <div className={css.container}>
                        <div className={[css.circle, css.high].join(' ')}></div>
                        <span className={[css.text, css[theme]].join(' ')}>
                        High
                        </span>
                    </div>
                    )}
                </label>
                </li>
            </ul>
            <p className={[css.mainText, css[theme]].join(' ')}>Deadline</p>
            <label className={css.dateWrap}>
                <DatePicker
                    selected={watch('deadline')}
                    onChange={(date) => setValue('deadline', date)}
                    dateFormat="EEE, d MMMM yyyy"
                    calendarStartDay={1}
                    placeholderText="Select a deadline"
                    className={[css.date, css[theme]].join(' ')}
                    calendarClassName={[css.calendarStyles, css[theme]].join(' ')}
                    minDate={new Date()}
                />
                <div className={css.dropdownIconWrap}>
                <svg
                    className={[css.dropdownIcon, css[theme]].join(' ')}
                    width="18"
                    height="18"
                >
                    <use href={`${sprite}#icon-chevron-down`} />
                </svg>
                </div>
            </label>
            <button type="submit" className={[css.addBtn, css[theme]].join(' ')}>
                <div className={css.iconWrap}>
                <svg className={css.iconPlus} width="14" height="14">
                    <use href={sprite + '#icon-plus'}></use>
                </svg>
                </div>
                Save
            </button>
            </form>
        </Modal>
    );
};

export default EditCardModal;

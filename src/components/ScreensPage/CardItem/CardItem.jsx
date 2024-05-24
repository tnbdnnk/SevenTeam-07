import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';
import { selectBoard } from '../../../redux/boards/boards-selectors.js';
import { deleteCard } from "../../../redux/boards/boards-operations";
import { useModal } from '../../../hooks/useModal.js';
import ModalDragCard from '../../../helpers/ModalWindow/ModalDragCard.jsx';
import EditCardModal from './EditCard/EditCardModal.jsx';
import DragCardItem from './DragCardItem/DragCardItem.jsx';
import { handleSetColor, handleFormatDate, handleCompareDates } from './CardItemFunctions/CardItemFunctions';

import { toast } from 'react-hot-toast';
import css from './CardItem.module.css';
import icons from '../../../images/symbol-defs.svg';


const CardItem = ({ card, columnId }) => {

    const dispatch = useDispatch();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const { isModalOpen, openModal, closeModal } = useModal();
    const { _id, title, description, label, deadline } = card;
    const { theme } = useSelector(selectUser);
    const board = useSelector(selectBoard);
    const isActiveButton = board.columns.length > 1;
    
    const currentDate = Date.now();
    const formattedDeadline = handleFormatDate(deadline);
    const isDeadlineToday = handleCompareDates(currentDate, deadline);
    
    // Для видалення карточки Маша
    const handleDeleteCard = async (id) => {
        try {
            await dispatch(deleteCard(id));
            toast.success('Сard was deleted successfully!');
        } catch (error) {
            console.error(error.message);
        }
    }
    
    return (
        <li key={_id} className={[css.card, css[theme]].join(' ')}>
            {isEditModalOpen && (
                <EditCardModal
                    isModalOpen={isEditModalOpen}
                    closeModal={() => setIsEditModalOpen(false)}
                    card={card}
                />
            )}

            <div style={handleSetColor(label)} className={css.cardLine}></div>
            <div className={css.textCardWrap}>
                <h4 className={[css.title, css[theme]].join(' ')}>{title}</h4>
                <p className={[css.subscribe, css[theme]].join(' ')}>{description}</p>
            </div>

            <div className={[css.vector, css[theme]].join(' ')}></div>

            <div className={css.addedInfoWrap}>
                <div className={css.propertyWrap}>
                    <div>
                        <p className={[css.caption, css[theme]].join(' ')}>Priority</p>
                        <div className={css.priorityDataWrap}>
                            <div style={handleSetColor(label)} className={css.circle}></div>
                            <p className={[css.text, css[theme]].join(' ')}>{label}</p>
                        </div>
                    </div>
                        <div>
                            <p className={[css.caption, css[theme]].join(' ')}>Deadline</p>
                            <p className={[css.text, css[theme]].join(' ')}>
                                {formattedDeadline}
                            </p>
                        </div>
                    </div>

                    <div className={css.buttonsWrap}>
                    {isDeadlineToday && (
                        <button className={`${css.button} ${css.green}`} type="button">
                            <svg className={css.iconAccent} width="16" height="16">
                                <use href={icons + '#icon-bell'}></use>
                            </svg>
                        </button>
                    )}
                    <button className={isActiveButton ? `${css.buttonActive} ${css.green}` : `${css.buttonDisable}`} type="button"
                        onClick={isActiveButton ? openModal : null}>
                        <svg className={[css.icon, css[theme]].join(' ')} width="16" height="16">
                            <use href={icons + '#icon-arrow-circle-broken-right'}></use>
                        </svg>
                    </button>

                    <ModalDragCard isOpen={isModalOpen} onClose={closeModal}>
                        <ul className={css.modalList}>
                            {board.columns && board.columns
                                .filter(columnItem => Object.hasOwn(columnItem, '_id'))
                                .filter(columnItem => columnItem._id !== columnId)
                                .map(columnItem => (
                                    <DragCardItem onClose={closeModal} key={columnItem._id} columnItem={columnItem} _id={_id} columnId={columnId} />
                                ))
                            }
                        </ul>
                    </ModalDragCard>

                    <button className={`${css.button} ${css.green}`} type="button" onClick={()=>setIsEditModalOpen(true)}>
                        <svg className={[css.icon, css[theme]].join(' ')} width="16" height="16">
                            <use href={icons + '#icon-pen'}></use>
                        </svg>
                    </button>
                    <button className={`${css.button} ${css.red}`} type="button" onClick={() => handleDeleteCard(_id)}>
                        <svg className={[css.icon, css[theme]].join(' ')} width="16" height="16">
                            <use href={icons + '#icon-trash'}></use>
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    );
};


export default CardItem;

import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../../redux/auth/auth-selectors';
import { moveCard } from "../../../../redux/boards/boards-operations";

import css from './DragCardItem.module.css';
import icons from '../../../../images/symbol-defs.svg';


const DragCardItem = ({ _id, columnItem, columnId, onClose }) => {

    const dispatch = useDispatch();
    const { theme } = useSelector(selectUser);

    const handleDrag = (_id, newColumnId, oldColumnId) => {
        dispatch(moveCard({ _id: _id, newColumnId: newColumnId, oldColumnId: oldColumnId }));
        onClose();
    };

    return (
        <li className={css.modalItem} key={columnItem._id} onClick={() => handleDrag(_id, columnItem._id, columnId)}>
            <p className={[css.modalText, css[theme]].join(' ')}>{columnItem.title}</p>
            <button className={css.modalButton} type="button">
                <svg className={[css.modalIcon, css[theme]].join(' ')} width="16" height="16">
                    <use href={icons + '#icon-arrow-circle-broken-right'}></use>
                </svg>
            </button>
        </li>
    );
};


export default DragCardItem;

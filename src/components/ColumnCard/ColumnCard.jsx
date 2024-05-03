// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import css from './ColumnCard.module.css';
import icons from '../../images/symbol-defs.svg';


const ColumnCard = ({ id, name }) => {
    // const dispatch = useDispatch();

    // useEffect(() => { 
    //     // dispatch();
    //     console.log(name);
    // }, [name]) 

    const handleEditColumn = () => { 
        console.log("Має відкритися модальне вікно - Edit column");
    }

    const handleDeleteColumn = () => { 
        console.log("??? Має відкритися модальне вікно - Delete column");
    }

    return (
        <li className={css.card} key={id}>
            {/* <p className={css.text}>In progress</p> */}
            <p className={css.text}>{name}</p>
            <div className={css.buttonsWrapper}>
                <button className={css.button} type='button' onClick={handleEditColumn}>
                    <svg className={css.icon} width='16' height='16'>
                        <use href={icons + '#icon-pen'}></use>
                    </svg>
                </button>
                <button className={css.button} type='button' onClick={handleDeleteColumn}>
                    <svg className={css.icon} width='16' height='16'>
                        <use href={icons + '#icon-trash'}></use>
                    </svg>
                </button>
            </div>
        </li>
    );
};


export default ColumnCard;
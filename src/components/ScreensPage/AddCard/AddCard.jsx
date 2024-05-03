import css from './AddCard.module.css';
import icons from '../../../images/symbol-defs.svg';


const AddCard = () => {
    const handleAddCard = () => { 
        console.log("Має відкритися модальне вікно - Add card");
    }

    return (
        <button className={css.button} type='button' onClick={handleAddCard}>
            <div className={css.iconBox}>
                <svg className={css.icon} width='14' height='14'>
                    <use href={icons + '#icon-plus'}></use>
                </svg>
            </div>
            <p className={css.text}>Add another card</p>
        </button>
    );
};


export default AddCard;
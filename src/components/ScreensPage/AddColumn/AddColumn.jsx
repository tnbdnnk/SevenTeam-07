import css from './AddColumn.module.css';
import icons from '../../../images/symbol-defs.svg';


const AddColumn = () => {
    const handleAddColumn = () => { 
        console.log("Має відкритися модальне вікно - Add column");
    }

    return (
        <button className={css.button} type='button' onClick={handleAddColumn}>
            <svg className={css.icon} width='28' height='28'>
                <use href={icons + '#icon-plus'}></use>
            </svg>
            <p className={css.text}>Add new column</p>
        </button>
    );
};


export default AddColumn;
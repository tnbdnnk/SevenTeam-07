import css from './AddColumn.module.css';
import icons from '../../../images/symbol-defs.svg';


const AddColumn = () => {
    const handleAddColumn = () => { 
        console.log("Має відкритися модальне вікно - Add column");
    }

    return (
        <button className={css.button} type='button' onClick={handleAddColumn}>
            <div className={css.iconBox}>
                <svg className={css.icon} width='14' height='14'>
                    <use href={icons + '#icon-plus'}></use>
                </svg>
            </div>
            <p className={css.text}>Add new column</p>
        </button>
    );
};


export default AddColumn;
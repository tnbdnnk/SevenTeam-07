import css from './Filters.module.css';
import icons from '../../images/symbol-defs.svg';


const Filters = () => {

    const handleOpenModal = () => {
        console.log('Має відкритися модальне вікно - Filters');
    };

    return (
        <button className={css.button} type="button" onClick={handleOpenModal}>
            <svg className={css.icon} width="16" height="16">
                <use href={icons + '#icon-filter'}></use>
            </svg>
            <p className={css.text}>Filters</p>
        </button>
    );
};


export default Filters;
import css from './ColumnCard.module.css';
import icons from '../../../images/symbol-defs.svg';
import CardItem from '../CardItem/CardItem';


const ColumnCard = ({ id, name }) => {
    const handleEditColumn = () => { 
        console.log("Має відкритися модальне вікно - Edit column");
    }

    const handleDeleteColumn = () => { 
        console.log("??? Має відкритися модальне вікно - Delete column");
    }

    return (
        <li className={css.item} key={id}>
            {/* <p className={css.text}>In progress</p> */}
            <div className={css.columnCard}>
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
            </div>
            
            <div>
                <CardItem />
            </div>
        </li>
    );
};


export default ColumnCard;
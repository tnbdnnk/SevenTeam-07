import css from './CardItem.module.css';
import icons from '../../../images/symbol-defs.svg';


const CardItem = (card) => {
    const { title, subscription, priority, deadline } = card;

    // написати функціонал для обробки дат і кольору:
    const deadlineDate = '2011-10-10';
    const today = '2011-10-10';
    const priorityColor = '#8fa1d0';

    const isDeadlineToday = (today === deadlineDate);

    const handleSetColor = (image) => {
        if (image) {
            return { backgroundColor: `${priorityColor}` }
        };
        return;
    }
    
    const handleEditCard= () => { 
        console.log("Має відкритися модальне вікно - Edit card");
    }

    const handleDeleteCard = () => { 
        console.log("Має відкритися модальне вікно - Delete card");
    }

    const handleChangeColumn = () => { 
        console.log("Має відкритися tooltip - Change column");
    }

    return (
        <div className={css.card}>
            <div style={handleSetColor(priorityColor)} className={css.cardLine}></div>
            <div className={css.textCardWrap}>
                <h4 className={css.title}>{title}</h4>
                <p className={css.subscribe}>{subscription}</p>
            </div>

            <div className={css.vector}></div>

            <div className={css.addedInfoWrap}>
                <div className={css.propertyWrap}>
                    <div>
                        <p className={css.caption}>Priority</p>
                        <div className={css.priorityDataWrap}>
                            <div style={handleSetColor(priorityColor)} className={css.circle}></div>
                            <p className={css.text}>{priority}</p>
                        </div>
                    </div>
                    <div>
                        <p className={css.caption}>Deadline</p>
                        <p className={css.text}>{deadline}</p>
                    </div>
                </div>

                <div className={css.buttonsWrap}>  
                    {isDeadlineToday && <button className={`${css.button} ${css.green}`} type='button'>
                        <svg className={css.iconAccent} width='16' height='16'>
                            <use href={icons + '#icon-bell'}></use>
                        </svg>
                    </button>}
                    <button className={`${css.button} ${css.green}`} type='button' onClick={handleChangeColumn}>
                        <svg className={css.icon} width='16' height='16'>
                            <use href={icons + '#icon-arrow-circle-broken-right'}></use>
                        </svg>
                    </button>
                    <button className={`${css.button} ${css.green}`} type='button' onClick={handleEditCard}>
                        <svg className={css.icon} width='16' height='16'>
                            <use href={icons + '#icon-pen'}></use>
                        </svg>
                    </button>
                    <button className={`${css.button} ${css.red}`} type='button' onClick={handleDeleteCard}>
                        <svg className={css.icon} width='16' height='16'>
                            <use href={icons + '#icon-trash'}></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default CardItem;
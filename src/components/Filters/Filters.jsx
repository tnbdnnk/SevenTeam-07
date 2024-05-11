import css from './Filters.module.css';
import icons from '../../images/symbol-defs.svg';


const Filters = () => {
    // const label = card;

    const handleOpenModal = () => {
        console.log('Має відкритися модальне вікно - Filters');
    };

    // const handleSetColor = (image) => {
    //     if (image) {
    //         return { backgroundColor: `${label}` }
    //     };
    //     return;
    // }

    return (
        <>
            <button className={css.button} type="button" onClick={handleOpenModal}>
                <svg className={css.icon} width="16" height="16">
                    <use href={icons + '#icon-filter'}></use>
                </svg>
                <p className={css.subscribe}>Filters</p>
            </button>

            <div>
                <h4>Filters</h4>
                <div className={css.vector}></div>
                <div>
                    <p>Label color</p>
                    <p>Show all</p>
                </div>
                <ul>
                   <li className={css.priorityDataWrap}>
                        <div className={css.circle}></div>
                        {/* <div style={handleSetColor(label)} className={css.circle}></div> */}
                        <p className={css.text}>Without priority</p>
                    </li>
                    <li className={css.priorityDataWrap}>
                        <div className={css.circle}></div>
                        {/* <div style={handleSetColor(label)} className={css.circle}></div> */}
                        <p className={css.text}>Low</p>
                    </li>
                    <li className={css.priorityDataWrap}>
                        <div className={css.circle}></div>
                        {/* <div style={handleSetColor(label)} className={css.circle}></div> */}
                        <p className={css.text}>Medium</p>
                    </li>
                    <li className={css.priorityDataWrap}>
                        <div className={css.circle}></div>
                        {/* <div style={handleSetColor(label)} className={css.circle}></div> */}
                        <p className={css.text}>High</p>
                    </li>
                </ul>
            </div>
        </>
    );
};


export default Filters;
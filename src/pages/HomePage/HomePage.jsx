import Filters from '../../components/Filters/Filters';

import css from './HomePage.module.css';


const HomePage = () => {

    const handleCreateBoard = () => {
        console.log('Має відкритися модальне вікно - New Board');
    };

    return (
        <section className={css.section}>
            <div className={css.settingsWrapper}>
                <Filters />
            </div>

            <div className={css.textWrapper}>
                <p className={css.text}>
                    Before starting your project, it is essential
                    <a href="#" onClick={handleCreateBoard} className={css.link}> to create a board</a> to
                    visualize and track all the necessary tasks and milestones. This
                    board serves as a powerful tool to organize the workflow and
                    ensure effective collaboration among team members.
                </p>
            </div>
        </section>
    );
};


export default HomePage;

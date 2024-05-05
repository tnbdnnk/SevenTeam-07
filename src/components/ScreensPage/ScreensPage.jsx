import { useState } from 'react';
import AddColumn from './AddColumn/AddColumn';
import ColumnCard from './ColumnCard/ColumnCard';
import Filters from '../Filters/Filters';

import css from './ScreensPage.module.css';


const ScreensPage = () => {

    const [boards, setBoards] = useState({
        name: 'Project office',
        // columns: [],
        columns: ['To Do', 'In Progress', 'Done'],
        id: '12345',
    });

    // let isBoardAdded = boards?.length !== 0;

    // const handleCreateBoard = () => {
    //     console.log('Має відкритися модальне вікно - New Board');
    // };

  const handleDeleteColumn = (columnIndex) => {
    setBoards((prevBoards) => {
      const newColumns = [...prevBoards.columns];
      newColumns.splice(columnIndex, 1);
      return { ...prevBoards, columns: newColumns };
    });
  };

    return (
        <section className={css.section}>
            <div className={css.activeSettingsWrapper}>
            {/* <div className={isBoardAdded ? css.activeSettingsWrapper : css.settingsWrapper}>
                {isBoardAdded ? <h2 className={css.title}>{boards.name}</h2> : ''} */}
                <h2 className={css.title}>{boards.name}</h2>
                <Filters />
            </div>
            <div className={css.columnListWrap}>

                {/* <ul className={isBoardAdded ? css.columnList : css.columnListAdded }> */}
                <ul className={css.columnList}>
                    {boards?.columns?.map((item, index) => (
                        <ColumnCard
                            key={index}
                            name={item}
                            onDelete={() => handleDeleteColumn(index)}
                        />
                    ))}
                    <AddColumn /> 
                    {/* {isBoardAdded && <AddColumn /> } */}
                </ul>

                {/* {!isBoardAdded && (<div className={css.mainContentWrapper}>
                    <p className={css.text}>
                        Before starting your project, it is essential
                        <a href="#" onClick={handleCreateBoard} className={css.link}> to create a board</a> to
                        visualize and track all the necessary tasks and milestones. This
                        board serves as a powerful tool to organize the workflow and
                        ensure effective collaboration among team members.
                    </p>
                </div>)} */}
            </div>
        </section>
    );
};


export default ScreensPage;

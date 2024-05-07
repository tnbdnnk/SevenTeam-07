import { useState } from 'react';
import AddColumn from './AddColumn/AddColumn';
import ColumnCard from './ColumnCard/ColumnCard';
import Filters from '../Filters/Filters';

import css from './ScreensPage.module.css';


const ScreensPage = () => {
  
  const [boards, setBoards] = useState({
        name: 'Project office',
        column: ['To Do', 'In Progress', 'Done'],
        // column: [],
        id: '12345',
        background: 'https://amiel.club/uploads/posts/2022-03/1647776100_1-amiel-club-p-yarkie-kartinki-na-zastavku-1.jpg',
  });
  
  const handleDeleteColumn = (index) => {
    setBoards((prevBoards) => {
      const newColumns = [...prevBoards.column];
      newColumns.splice(index, 1);
      console.log({ ...prevBoards, column: newColumns });
      return { ...prevBoards, column: newColumns };
    });
  };

  const handleAddColumn = (newColumn) => {
    setBoards((prevBoards) => ({
      ...prevBoards,
      column: [...prevBoards.column, newColumn],
    }));
  };

  return (
      <div className={css.container}>
      {/* <div bg={boardBackground(oneBoard)} className={css.container}> */}
        <section className={css.section}>
            <div className={css.activeSettingsWrapper}>
                <h2 className={css.title}>{boards.name}</h2>
                <Filters />
            </div>
            <div className={css.columnListWrap}>

                <ul className={css.columnList}>
                    {boards.column.map((item, i) => (
                        <ColumnCard
                            key={item}
                            name={item}
                            onDelete={() => handleDeleteColumn(i)}
                            index={i}
                        />
                    ))}
                    <AddColumn onAddColumn={handleAddColumn}/> 
                </ul>
            </div>
        </section>
    </div>
    );
};


export default ScreensPage;

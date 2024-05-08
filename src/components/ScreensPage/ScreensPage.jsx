import { useState } from 'react';
import AddColumn from './AddColumn/AddColumn';
import ColumnCard from './ColumnCard/ColumnCard';
import Filters from '../Filters/Filters';
// import Background from './Background/Background';

import css from './ScreensPage.module.css';


const ScreensPage = () => {
  
  const [boards, setBoards] = useState({
    name: 'Project office',
    column: ['To Do', 'In Progress', 'Done'],
    // column: [],
    id: '12345',
    background: 'https://wallpaper.forfun.com/fetch/98/986a3988049771e452a4c8de5399e3e1.jpeg',
    // background: null,
  });

  const bgImage = boards?.background;

  const handleBackground = (image) => {
    if (image) {
      return { backgroundImage: `url(${bgImage})` }
    };
    return;
  }
  
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
        <div style={handleBackground(bgImage)} className={bgImage ? `${css.container} ${css.imageStyles}` : `${css.container}`}>
        {/* <Background className={css.container}> */}
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
                        />))}
                        <AddColumn onAddColumn={handleAddColumn}/> 
                    </ul>
                </div>
        </section>
        {/* </Background> */}
        </div>
    );
};


export default ScreensPage;

import Sidebar from '../../components/Sidebar/Sidebar'
import ScreensPage from '../../components/ScreensPage/ScreensPage';

import css from './SecondPage.module.css';


const SecondPage = () => {
  return (
    <div className={css.wrapper} >
      <Sidebar />
      <div>
        {/* місце для Header */}
        <ScreensPage />
      </div>
    </div>
  );
};


export default SecondPage;

import { Outlet } from 'react-router-dom';
import './dashBoardLayout.css';

const DashBoardLayout = () => {
  return (
    <div className='dashBoardLayout'>
        <div className="menu">MENU</div>
        <Outlet/>
    </div>
  );
};

export default DashBoardLayout;
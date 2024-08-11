import { Outlet } from 'react-router-dom';
import './dashBoardLayout.css';
import ChatList from '../../components/chatlist/ChatList';

const DashBoardLayout = () => {
  return (
    <div className='dashBoardLayout'>
        <div className="menu"><ChatList/></div>
        <div className="content">
        <Outlet/>
        </div>
    </div>
  );
};

export default DashBoardLayout;
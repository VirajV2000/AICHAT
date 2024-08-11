import { Link } from 'react-router-dom';
import './chatlist.css';

const ChatList = () => {
  return (
    <div className='chatList'>
        <span className='title'>Dashboard</span>
        <Link to="/dashboard">Create a new chat</Link>
        <Link to="/">Explore</Link>
        <Link to="/">Contact</Link>
        <hr />
        <span className='title'>Recent chats</span>

        <div className="lists">
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            
        </div>
        <hr/>
        <div className="upgrade">
            <img src="/logo.png" alt="" />
            <div className="texts-up">
                <span>Upgrade to LAMA AI PRO</span>
                <span>Get unlimited access to all features</span>
            </div>
        </div>
    </div>
  );
};

export default ChatList;
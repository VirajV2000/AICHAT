import { useEffect, useRef } from 'react';
import './chatPage.css';
import NewPrompt from '../../components/newPrompt/NewPrompt';

const ChatPage = () => {
  
  return (
    <div className='chatPage'>
      <div className="wrapper">
        <div className="chat">
          {/* <div className="mesage">Text mesage from ai </div> */}
          <div className="message user">message from the userlormessage from the userlormessage from the userlor</div>
          <div className="mesage">Text mesage from ai </div>
          <div className="message user">message from the user</div>
          <div className="mesage">Text mesage from ai </div>
          <div className="message user">message from the user</div>
          <div className="mesage">Text mesage from ai </div>
          <div className="message user">message from the user</div>
          <div className="mesage">Text mesage from ai </div>
          <div className="message user">message from the user</div>
          <div className="mesage">Text mesage from ai </div>
          <div className="message user">message from the user</div>
          <div className="mesage">Text mesage from ai </div>
          <div className="message user">message from the user</div>
          <div className="mesage">Text mesage from ai </div>
          <div className="message user">message from the user</div><div className="mesage">Text mesage from ai </div>
          <div className="message user">message from the user</div><div className="mesage">Text mesage from ai </div>
          <div className="message user">message from the user</div>
          <div className="message user">message from the user</div><div className="mesage">Text mesage from ai </div>
          <div className="message user">message from the user</div>
          <NewPrompt/>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
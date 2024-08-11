import { Link } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {
  return (
    <div className='homePage'>
      <img src="./orbital.png" alt="" className='orbital'/>
      <div className="left">
        <h1>AI CHATBOT</h1>
        <h2>Superchange your productivity</h2>
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio dignissimos itaque harum omnis reprehenderit sint necessitatibus. </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="./bot.png" alt="" className='bot' />
        </div>
      </div>
      <div className="terms">
        <img src="./logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>


        </div>
      </div>
    </div>
  );
};

export default HomePage;
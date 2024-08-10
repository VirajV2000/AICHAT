import { Link } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="left">
        <h1>AI CHATBOT</h1>
        <h2>Superchange your productivity</h2>
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio dignissimos itaque harum omnis reprehenderit sint necessitatibus. </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default HomePage;
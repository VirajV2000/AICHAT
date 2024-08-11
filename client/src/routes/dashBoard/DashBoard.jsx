import { useAuth } from '@clerk/clerk-react';
import './dashboard.css';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';



const DashBoard = () => {
  const navigate=useNavigate();

  const {userId,isLoaded}=useAuth();

  useEffect(()=>{
    if(isLoaded && !userId){
      navigate("/sign-in");
    }
},[userId,isLoaded,navigate]);
  return (
    <div className='dashBoard'>
      <div className="texts">
        <div className="logo">
          <img src="./logo.png" alt="" />
          <h1>LAMA AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="" />
            <span>Create a new chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analyze with image</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="" />
            <span>Help me with my code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form action="">
          <input type="text" placeholder='Ask me anything...' />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashBoard
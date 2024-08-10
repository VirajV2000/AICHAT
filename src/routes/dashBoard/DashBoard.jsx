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
    <div className='dashBoard'>DashBoard</div>
  )
}

export default DashBoard
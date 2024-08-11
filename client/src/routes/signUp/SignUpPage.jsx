import { SignUp } from '@clerk/clerk-react';
import './signUp.css';

const SignUpPage = () => {
  return (
    <div className='signUpPage'>  
     <SignUp path="/sign-up" signInUrl="/sign-in" forceRedirectUrl={"/sign-in"} />
    </div>
  );
};

export default SignUp;  
import { Link, Outlet } from 'react-router-dom';
import './rootLayout.css';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
console.log(PUBLISHABLE_KEY);
// console.log("hi");
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="http://localhost:5173/">

    <div className='rootLayout'>
      <header>
        <Link to="/" className='logo'>
        <img src="/logo.png" alt="" />
        <span>LAMA AI</span>
        </Link>
        <div className="user">
        <SignedOut>
        {/* <SignInButton/> */}
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
    </ClerkProvider>
  );
};

export default RootLayout;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './routes/homePage/HomePage.jsx';
import ChatPage from './routes/chatPage/ChatPage.jsx';
import DashBoard from './routes/dashBoard/DashBoard.jsx';
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import DashBoardLayout from './layouts/dashBoardLayout/DashBoardLayout.jsx';
import Signin from './routes/signIn/Signin.jsx';
import SignUp from './routes/signUp/SignUpPage.jsx';




const router = createBrowserRouter([
  {
    element:<RootLayout/>,
    children:[
      {
          path:"/",element:<HomePage/>,
      },
      {
        element:<DashBoardLayout/>,
        children:[
          {
            path:"/dashboard",
            element:<DashBoard/>
          },
          {
            path:"/dashboard/chats/:id",
            element:<ChatPage/>
          },
        ]
      },
      {
        path:"/sign-in/*",element:<Signin/>,
      },
      {
        path:"/sign-up/*",element:<SignUp />,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
 </React.StrictMode>
)

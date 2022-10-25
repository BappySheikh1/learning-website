import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router =createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
             path:'/courses',
             element: <Courses />
            },
            {
                path:'/blog',
                element:<Blog />
            },
            {
             path:'/login',
             element:<Login />
            },
            {
             path:'/register',
             element:<Register />
            }
        ]
    }
]) 
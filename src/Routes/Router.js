import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import FaqPAge from "../Pages/FAQPage/FaqPAge";
import Home from "../Pages/Home/Home";
import LeftSideNavDetails from "../Pages/LeftSideNav/LeftSideNavDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


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
             loader:()=>fetch('https://learning-website-server-nu.vercel.app/turorial/All'),
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
            },
            {
                path:'/faq',
                element:<FaqPAge></FaqPAge>
            },
            // {
            //      path:'/courses/:id',
            //     loader: ({params})=>fetch(`http://localhost:5000/tutorial/${params.id}`),
            //     element:<CardDetails />
            // },
            {
                path:'/category/:id',
                loader:({params})=>fetch(`https://learning-website-server-bappysheikh1.vercel.app/category/${params.id}`),
                element: <LeftSideNavDetails />
            },
            {
                path:'/checkout/:id', 
                loader:({params})=> fetch(`https://learning-website-server-bappysheikh1.vercel.app/tutorial/${params.id}`),
                element: <PrivateRoute> <CheckOut /></PrivateRoute>
            }
        ]
    }
]) 
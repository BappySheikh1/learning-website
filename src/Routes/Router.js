import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from '../Pages/ErrorPage/ErrorPage'

export const router =createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:'/',
                element:<div>This IS a Home</div>
            },
            {
             path:'/courses',
             element: <Courses />
            },
            {
                path:'/blog',
                element:<Blog />
            },
        ]
    }
]) 
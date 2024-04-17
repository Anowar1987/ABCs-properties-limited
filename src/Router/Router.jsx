import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import Login from "../pages/Login/Login";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import UserProfile from "../pages/UserProfile/UserProfile";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/estate/:id',
                element: <EstateDetails></EstateDetails>,
                loader: () => fetch('../estate.json') 
            },
            {
                path: '/updateprofile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/userprofile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }

]);

export default router;
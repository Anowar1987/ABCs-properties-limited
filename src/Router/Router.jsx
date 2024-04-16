import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import EstateDetails from "../pages/EstateDetails/EstateDetails";


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
        ]
    }

]);

export default router;
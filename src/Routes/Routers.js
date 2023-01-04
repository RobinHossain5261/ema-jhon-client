import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Shop from "../Pages/Shop/Shop";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/shop',
                element: <Shop></Shop>
            }
        ]
    }

])
export default routers;
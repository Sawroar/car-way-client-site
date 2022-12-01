import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main/Main"
import Home from "../Pages/Home/Home"
import Checkout from "../Pages/Products/Checkout";
import Products from "../Pages/Products/Products";
import Blogs from "../Pages/Shared/Blogs/Blogs";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Login from "../Pages/Shared/Login/Login";
import Signup from "../Pages/Shared/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Signup',
                element: <Signup></Signup>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/options/${params.id}`)
            },
            {
                path: '/products',
                element: <PrivateRoute> <Products></Products></PrivateRoute>
            }
        ]
    }
])

export default router;
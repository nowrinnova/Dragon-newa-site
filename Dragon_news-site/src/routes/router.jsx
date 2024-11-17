import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayOut from "../mainLayOut/HomeLayOut";
import CategoryNews from "../component/Pages/CategoryNews";
import AuthLayOut from "../mainLayOut/AuthLayOut";
import Login from "../component/Pages/Login";
import Register from "../component/Pages/Register";

const router =createBrowserRouter([
  {
    path: "*",
    element: <div>error</div>,
  },
  {
    path: "/",
    element:<HomeLayOut></HomeLayOut> ,
    children:[
      {
        path:"",
        element:<Navigate to={`/category/01`}></Navigate>
      },
      {
        path:"category/:id",
        element:<CategoryNews></CategoryNews>,
        loader:({params})=>
          fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        
      }
    ]
  },
  {
    path: "news",
    element: <div>news</div>,
  },
  {
    path: "auth",
    element: <AuthLayOut></AuthLayOut>,
    children:[
      {
        path:'',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
  },

])
export default router

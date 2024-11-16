import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayOut from "../mainLayOut/HomeLayOut";

const router =createBrowserRouter([
  {
    path: "*",
    element: <div>error</div>,
  },
  {
    path: "/",
    element:<HomeLayOut></HomeLayOut> ,
  },
  {
    path: "news",
    element: <div>news</div>,
  },
  {
    path: "auth",
    element: <div>auth</div>,
  },

])
export default router

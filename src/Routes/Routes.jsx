import {createBrowserRouter,} from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Register/Registration";
import JobDetails from "../components/JobDetails/JobDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element:<Home></Home> ,
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`) 
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: '/registration',
            element:<Registration></Registration>
        },
        {
          path: '/job/:id',
          element:<JobDetails></JobDetails>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        }
      ]
    },
  ]);

export default router;
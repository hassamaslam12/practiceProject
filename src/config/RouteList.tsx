import Error from "../Screens/Error";
import Home from "../Components/Dashboard";
import Student from "../Screens/StudentAdd";
import Signup from "../Screens/Signup";
import Login from "../Screens/Login";
import Protected from "./Protected";
import NewPass from "../Screens/NewPass";

export  const routelist =[
    
    {
        path:"/student",
        element:<Student />
    },
    {
        path:"/signup",
        element:<Signup />
    },
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/newpass",
        element:<Protected Component={NewPass} />
    },
    {
        path:"/*",
        element:<Protected Component={Home} />
    },


]
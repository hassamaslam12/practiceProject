import Error from "../Screens/Error";
import Home from "../Components/Dashboard";
import Student from "../Screens/StudentAdd";

export  const routelist =[
{
    path:"/*",
    element:<Home />
},

{
    path:"/student",
    element:<Student />
},


]
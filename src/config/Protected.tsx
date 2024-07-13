import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { alreadySignedIn } from '../Firebase/FirebaseMethods';

const Protected = ({Component}:any) => {
    const [loader,setLoader] = useState(true);
    const navigate = useNavigate()

    const checking = ()=>{
       alreadySignedIn().then((data:any)=>{
      
            setLoader(false);
        
       })
       .catch((err:any)=>{
        if(err == 0){
            navigate("/login")
        }
       })
       
    }

    useEffect(checking,[])

  return (
    <>
     {loader?<>Loading</>:<Component/>} 
    </>
  )
}

export default Protected

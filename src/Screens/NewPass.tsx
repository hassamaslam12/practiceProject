import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { alreadySignedIn, editPassword } from '../Firebase/FirebaseMethods'
import { useNavigate } from 'react-router-dom'

const NewPass = () => {
    const [inpData,setInpData] = useState<any>()
    const navigate = useNavigate()
    const checking = ()=>{
        alreadySignedIn().then((data:any)=>{
       
         
         
        })
        .catch((err:any)=>{
         if(err == 0){
             navigate("/login")
         }
        })
        
     }
 
     useEffect(checking,[])

    
    const inpChangeHandler =(e:any) =>{
        setInpData((prev:any)=>({...prev,[e.target.id]:e.target.value}))
    }
  return (
    <div>
      <input type="password" placeholder='Enter new Pass' id="newPass" onChange={(e)=>{inpChangeHandler(e)}} />
      <Button onClick={()=>{editPassword(inpData.newPass)}}>Submit</Button>
    </div>
  )
}

export default NewPass

import React, { useState } from 'react'
import { loginVerification } from '../Firebase/FirebaseMethods'
import { Navigation } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [inpData,setInpData] = useState<any>({email: '', password:""})
    const navigate = useNavigate()

    const inpChangeHandler = (e:any)=>{
        setInpData((prev:any)=>({...prev,[e.target.id]:e.target.value}))
    }
    console.log(inpData);

    const loginHandler = () =>{
        loginVerification(inpData.email, inpData.password)
        .then((data)=>{
            console.log(data);
            navigate("/")
        })
        .catch((err)=>{
            console.log(err);
            alert(err.message)
            setInpData({email: '', password:""})
        })

    }
    
  return (
    <div>
        Login<br/>
        <input onChange={(e)=>inpChangeHandler(e)} type="text" placeholder="E-mail" id='email' value={inpData.email}/><br/>
        <input onChange={(e)=>inpChangeHandler(e)} type="text" placeholder="password" id='password' value={inpData.password}/><br/>
        <button onClick={loginHandler}>Submit</button>
        <Link to="/signup">Do not have an Account?</Link>
    </div>
  )
}

export default Login

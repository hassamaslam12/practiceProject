import React, { useState } from 'react'
import { loginVerification } from '../Firebase/FirebaseMethods'
import { Navigation } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, CircularProgress, Stack, TextField } from '@mui/material'


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
        {/* Login<br/>
        <input onChange={(e)=>inpChangeHandler(e)} type="text" placeholder="E-mail" id='email' value={inpData.email}/><br/>
        <input onChange={(e)=>inpChangeHandler(e)} type="text" placeholder="password" id='password' value={inpData.password}/><br/>
        <button onClick={loginHandler}>Submit</button>
        <Link to="/signup">Do not have an Account?</Link> */}
           <Stack sx={{
        height: '100vh',
       
        background: 'linear-gradient(180deg, rgba(91,152,217,1) 27%, rgba(155,212,134,1) 100%)'
    }} 
    justifyContent={'center'} 
    alignItems={'center'}>

        <Stack sx={{
            bgcolor: '#FFF',
            borderRadius: '10px',
            boxShadow: '0px 0px 20px #555'
        }}
        p={5}
        gap={2}
        >
            <Box>Login</Box>
            
            <Stack>
                <TextField label={'E-mail'} id='email' onChange={inpChangeHandler} />
            </Stack>
            <Stack>
                <TextField label={'Password'} id='password' type='password' onChange={inpChangeHandler}/>
            </Stack>
            <Stack>
                <TextField label={'name'} id='name' type='text' onChange={inpChangeHandler}/>
            </Stack>
            <Stack>

           

                <Button variant='contained'  sx={{
        
        background: 'linear-gradient(124deg, rgba(91,152,217,0.7) 27%, rgba(155,212,134,0.7) 100%)',
        my:2
                }}
                onClick={loginHandler}>
                    Login
                </Button>
                <Link to="/signup">Do not have an Account?</Link>
                

            </Stack>


        </Stack>

    </Stack>

    </div>
  )
}

export default Login

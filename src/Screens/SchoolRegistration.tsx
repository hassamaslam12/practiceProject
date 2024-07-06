import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatafromFirebase, writeData } from '../Firebase/FirebaseMethods'
import toast, { Toaster } from 'react-hot-toast'












////////////////////main component


const SchoolRegistration = () => {

    const [schoolData,setSchoolData] = useState<any>({});
    const pb ={
        paddingBottom:2
    }



    const getschoolData = () => {
        getDatafromFirebase('school').then((data:any) =>{
             console.log(data.val())
            
             setSchoolData(data.val())
            }
        ).catch(err => console.log(err))
    }

    useEffect(()=>{
        getschoolData();
    },[])




   const [inpData,setInpData] = useState<any>({
    schoolName:"",
    contact:"",
    address:"",
    vicePrincipalName:"",
    principalName:"",
   })

   const inpChangeHandler = (event:any) =>{
    console.log(event);
    
    setInpData((prev:any)=>({...prev,[event.target.id]:event.target.value}))
   }
   console.log(inpData);
   
   const sendDataOfSchool = () =>{
        writeData("school",inpData).then(()=>{
            toast.success("Registration successful");
            setInpData({schoolName:"",
                contact:"",
                address:"",
                vicePrincipalName:"",
                principalName:"",})
        })
   }

  return (
    <div>
        <div><Toaster
  position="bottom-center"
  reverseOrder={true}
/></div>
          <Box component="section" sx={{ p: 2,textAlign:"center", border: '1px solid grey' }}>
      <Typography variant='h5' component="h1">

      School Registration
      </Typography>
    </Box>
   
    {!schoolData.schoolName? <Box sx={{m:5}}>


          <Box sx={{m:3}}>
{/* Name Information */}
    <TextField value={inpData.schoolName}  onChange={(e)=>inpChangeHandler(e)} id="schoolName" label="School Name" variant="outlined" fullWidth sx={pb}  />
    <TextField value={inpData.principalName}  onChange={(e)=>inpChangeHandler(e)} id="principalName" label="Principal's Name" variant="outlined" fullWidth sx={pb} />
    <TextField value={inpData.vicePrincipalName}  onChange={(e)=>inpChangeHandler(e)} id="vicePrincipalName" label="Vice Principal's Name" variant="outlined" fullWidth sx={pb} />
      </Box>
    
    



{/* Contact Information */}
    <Box sx={{m:3}}>

    <TextField value={inpData.contact}  onChange={(e)=>inpChangeHandler(e)} id="contact" label="Contact Number" variant="outlined" fullWidth sx={pb}  />
    <TextField value={inpData.address}  onChange={(e)=>inpChangeHandler(e)} id="address" label="Full Address" variant="outlined" fullWidth sx={pb} />
      </Box>


{/* Submit Button */}
    <Box sx={{m:3}}>
      <Button onClick={sendDataOfSchool} variant='contained'>Submit</Button>
      </Box>
    
    </Box>:<Box>
    <Typography variant='h5' component="h1">

School Already Registered
</Typography>
    </Box>
}
    </div>
  )
}

export default SchoolRegistration

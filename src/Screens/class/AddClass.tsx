import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { writeData } from '../../Firebase/FirebaseMethods'
import toast, { Toaster } from 'react-hot-toast'


const AddClass = () => {

  const [inpData,setInpData] = useState<any>({
    class:"",
    room: "",
    classMonitor:"",
    classTeacher: "",
  })

   const submitData = () =>{
    
    writeData("class",inpData,true).then(()=>{
      toast.success("Registration successful");
      setInpData({
        class:"",
    room: "",
    classMonitor:"",
    classTeacher: "",
      })
    })
   }


  const inpChangeHandler=(event:any) => {
    setInpData((prev:any)=>(
      {...prev,[event.target.id || event.target.name]:event.target.value}
    ));
    
  }
  console.log(inpData);
  

  return (
    <div>
      <div><Toaster
  position="bottom-center"
  reverseOrder={true}
/></div>
        <Box component="section" sx={{ p: 2,textAlign:"center", border: '1px solid grey' }}>
      <Typography variant='h5' component="h1">

      Add New Class
      </Typography>
    </Box>
    <Box sx={{m:5}}>
{/* Name Information */}
      <Box sx={{m:3}}>
    <TextField id="class" value={inpData.class} onChange={(e)=>inpChangeHandler(e)}  label="Class" variant="outlined" fullWidth type='number' sx={{marginTop:2}}/>
    <TextField id="room" value={inpData.room} onChange={(e)=>inpChangeHandler(e)}  label="Room Number" variant="outlined" fullWidth type='number' sx={{marginTop:2}}/>
      </Box>
    
   



    <Box sx={{m:3}}>

    <TextField id="classMonitor" value={inpData.classMonitor} onChange={(e)=>inpChangeHandler(e)} label="Class Monitor" variant="outlined" fullWidth sx={{paddingBottom:2}} />
    <TextField id="classTeacher" value={inpData.classTeacher} onChange={(e)=>inpChangeHandler(e)} label="Class Teacher" variant="outlined" fullWidth />
      </Box>


{/* Submit Button */}
    <Box sx={{m:3}}>
      <Button onClick={submitData} variant='contained'>Submit</Button>
      </Box>
   
    </Box>
   
    </div>
  )
}

export default AddClass

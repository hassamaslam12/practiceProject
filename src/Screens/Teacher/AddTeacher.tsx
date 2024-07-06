import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { writeData } from '../../Firebase/FirebaseMethods'

const AddTeacher = () => {
    const [inpData,setInpData] = useState<any>({
        fname:"",
        Lname:"",
        classTeacher:"",
        gender:"male",
        contact:"",
        address:"",
        schoolRollNumber: 1,
        subject:"",
        salary:""
      })

      const submitData = () =>{
    
        writeData("teachers",inpData,true).then(()=>{
          toast.success("Registration successful");
          setInpData({
            fname:"",
            Lname:"",
            classTeacher:"",
            gender:"male",
            contact:"",
            address:"",
            schoolRollNumber: 1,
            subject:"",
            salary:""
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

      Add New Teacher
      </Typography>
    </Box>
    <Box sx={{m:5}}>
{/* Name Information */}
      <Box sx={{m:3}}>

    <TextField id="fname" value={inpData.fname} onChange={(e)=>inpChangeHandler(e)}  label="First Name" variant="outlined"  sx={{paddingRight:2}} />
    <TextField id="Lname"value={inpData.Lname} onChange={(e)=>inpChangeHandler(e)}  label="Last Name" variant="outlined" />
    <TextField id="classTeacher" value={inpData.classTeacher} onChange={(e)=>inpChangeHandler(e)}  label="Class Teaching in" variant="outlined" fullWidth type='number' sx={{marginTop:2}}/>
    <TextField id="subject" value={inpData.subject} onChange={(e)=>inpChangeHandler(e)}  label="Subject" variant="outlined" fullWidth  sx={{marginTop:2}}/>
      </Box>
    
    {/* Gender Information */}
    <Box sx={{m:3}}>
    <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    name="gender"
    onChange={(e)=>inpChangeHandler(e)}
  >
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="female" control={<Radio />} label="Female" />
  </RadioGroup>
</FormControl>
    </Box>



{/* Contact Information */}
    <Box sx={{m:3}}>

    <TextField id="salary" value={inpData.salary} onChange={(e)=>inpChangeHandler(e)} label="Salary " variant="outlined" fullWidth sx={{paddingBottom:2}} />
    <TextField id="contact" value={inpData.contact} onChange={(e)=>inpChangeHandler(e)} label="Contact Number" variant="outlined" fullWidth sx={{paddingBottom:2}} />
    <TextField id="address" value={inpData.address} onChange={(e)=>inpChangeHandler(e)} label="Full Address" variant="outlined" fullWidth />
      </Box>


{/* Submit Button */}
    <Box sx={{m:3}}>
      <Button onClick={submitData} variant='contained'>Submit</Button>
      </Box>
   
    </Box>
   
    </div>
  )
}

export default AddTeacher

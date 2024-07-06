import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatafromFirebase, writeData } from '../Firebase/FirebaseMethods'
import toast, { Toaster } from 'react-hot-toast'
import { useParams } from 'react-router-dom'


const StudentAdd = () => {

  const [inpData,setInpData] = useState<any>({
    fname:"",
    Lname:"",
    class:"",
    gender:"male",
    contact:"",
    address:"",
    schoolRollNumber: 1
  })

  

   const editData = () =>{
    
    writeData(`students/${id}`,inpData).then(()=>{
      toast.success("Edit successful");
      setInpData({
        fname:"",
        Lname:"",
        class:"",
        gender:"male",
        contact:"",
        address:"",
        schoolRollNumber: 1
      })
    })
   }
   const submitData = () =>{
    
    writeData("students",inpData,true).then(()=>{
      toast.success("Registration successful");
      setInpData({
        fname:"",
        Lname:"",
        class:"",
        gender:"male",
        contact:"",
        address:"",
        schoolRollNumber: 1
      })
    })
   }

   const {id} = useParams()

   const validateData =()=>{
      if(id){
        getDatafromFirebase(`students/${id}`).then((dataSingle:any)=>{
          let temp = dataSingle.val()
          setInpData({...temp})
        })
      }
   }

   useEffect(()=>{
    validateData()
   },[])


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

      Add New Student
      </Typography>
    </Box>
    <Box sx={{m:5}}>
{/* Name Information */}
      <Box sx={{m:3}}>

    <TextField id="fname" value={inpData.fname} onChange={(e)=>inpChangeHandler(e)}  label="First Name" variant="outlined"  sx={{paddingRight:2}} />
    <TextField id="Lname"value={inpData.Lname} onChange={(e)=>inpChangeHandler(e)}  label="Last Name" variant="outlined" />
    <TextField id="class" value={inpData.class} onChange={(e)=>inpChangeHandler(e)}  label="class getting enrolled in" variant="outlined" fullWidth type='number' sx={{marginTop:2}}/>
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

    <TextField id="contact" value={inpData.contact} onChange={(e)=>inpChangeHandler(e)} label="Contact Number" variant="outlined" fullWidth sx={{paddingBottom:2}} />
    <TextField id="address" value={inpData.address} onChange={(e)=>inpChangeHandler(e)} label="Full Address" variant="outlined" fullWidth />
      </Box>


{/* Submit Button */}
    <Box sx={{m:3}}>
      <Button onClick={id?editData:submitData} variant='contained'>{id?"Edit":"Submit"}</Button>
      </Box>
   
    </Box>
   
    </div>
  )
}

export default StudentAdd

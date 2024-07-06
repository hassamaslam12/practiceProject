import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { writeData } from '../../Firebase/FirebaseMethods';
import toast, { Toaster } from 'react-hot-toast';

const AddSubjects = () => {
    const [inpData,setInpData]= useState<any>({
        subjectName:"",
        class:"",
        Teacher:""
    });
    const inpChangeHandler=(event:any) => {
        setInpData((prev:any)=>(
          {...prev,[event.target.id || event.target.name]:event.target.value}
        ));
        
      }


      const submitData = () =>{
    
        writeData("subjects",inpData,true).then(()=>{
          toast.success("Registration successful");
          setInpData({
            subjectName:"",
        class:"",
        Teacher:""
          })
        })
       }
  return (
    <div>
        <div><Toaster
  position="bottom-center"
  reverseOrder={true}
/></div>
         <Box component="section" sx={{ p: 2, border: '1px dashed grey',textAlign:"center"}}>
      Add Subject
    </Box>

    <Box sx={{m:3}}>

    <TextField id="subjectName" value={inpData.subjectName} onChange={(e)=>inpChangeHandler(e)} label="Subject Name " variant="outlined" fullWidth sx={{paddingBottom:2}} />
    <TextField id="class" value={inpData.class} onChange={(e)=>inpChangeHandler(e)} label="Class" variant="outlined" fullWidth sx={{paddingBottom:2}} />
    <TextField id="Teacher" value={inpData.Teacher} onChange={(e)=>inpChangeHandler(e)} label="Teacher Name" variant="outlined" fullWidth />
      </Box>


      <Box sx={{m:3}}>
      <Button onClick={submitData} variant='contained'>Submit</Button>
      </Box>
    </div>
  )
}

export default AddSubjects

import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { writeData } from '../../Firebase/FirebaseMethods'

const AddSyllabus = () => {
    const [inpData,setInpData] = useState<any>({
        class:"",
        description:""
    })
    const inpChangeHandler=(event:any) => {
        setInpData((prev:any)=>(
          {...prev,[event.target.id || event.target.name]:event.target.value}
        ));
        

      }
      const submitData = () =>{
    
        writeData("syllabus",inpData,true).then(()=>{
          toast.success("Registration successful");
          setInpData({
             class:"",
        description:""
          })
        })
       }
  return (
    <div>
    <div><Toaster
  position="bottom-center"
  reverseOrder={true}
/></div>
       <Box component="section" sx={{ p: 2, border: '1px dashed grey' ,textAlign:"center"}}>
      Add Syllabus
    </Box>
    <Box sx={{m:3}}>

<TextField id="class" value={inpData.class} onChange={(e)=>inpChangeHandler(e)}  label="Class " variant="outlined"  sx={{paddingRight:2}} fullWidth />
<TextField id="description"value={inpData.description} onChange={(e)=>inpChangeHandler(e)}  label="Description" variant="outlined" fullWidth multiline rows={16} />

  </Box>
  <Box sx={{m:3}}>
      <Button onClick={submitData} variant='contained'>Submit</Button>
      </Box>
    </div>
  )
}

export default AddSyllabus

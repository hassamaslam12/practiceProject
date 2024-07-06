import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDatafromFirebase } from '../../Firebase/FirebaseMethods'
import { Box } from '@mui/material'

const SingleSyllabus = () => {
    const {key}= useParams()
    const [data,setData] = useState<any>()
    const [isAvailable,setIsAvailable] = useState<boolean>(false)
    const getDataSyllabus = () =>{
        getDatafromFirebase(`syllabus/${key}`).then((a:any) => {setData(a.val());setIsAvailable(true)}
        )
    }
    useEffect(()=>{getDataSyllabus()},[])
    

  return (
    <div>
      {isAvailable &&<>
       <Box component="section" sx={{ p: 2, border: '1px dashed grey',textAlign:"center" }}>
     Class: {data.class} Syllabus
    </Box>
       <Box component="section" sx={{ p: 2, border: '1px dashed grey',textAlign:"center" }}>
        {data.description}
    </Box>
      </>
    }
    </div>
  )
}

export default SingleSyllabus

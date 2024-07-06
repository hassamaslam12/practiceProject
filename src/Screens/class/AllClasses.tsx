import React, { useEffect, useState } from 'react'
import { getDatafromFirebase } from '../../Firebase/FirebaseMethods'
import { Box, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const AllClasses = () => {
    const [studentData,setStudentData] = useState<any>()
    const [rows,setRows] = useState<any>()
    const randomId = Math.random()

    const getStudentsData = () =>{
        getDatafromFirebase("class").then((data:any)=>{
            console.log(data.val());
            setStudentData(data);
            setRows(Object.values(data.val()));
        })
    }
    useEffect(()=>{
        getStudentsData();
    },[])
    const columns: GridColDef<(any)[number]>[] = [
      {
          field: 'class',
          headerName: 'Class',
          type: 'number',
          width: 200,
          
      },
        {
          field: 'room',
          headerName: 'Room Number',
          width: 200,
          
        },
        {
          field: 'classMonitor',
          headerName: 'Class Monitor',
          width: 200,
          
        },
        {
          field: 'classTeacher',
          headerName: 'Class Teacher',
          width: 200,
          
        },
  
        
      ];

      
  return (
    <div>
        {!studentData?<Box>
            <Typography>
                No Classes Found
            </Typography>
        </Box>:
         <Box sx={{ height: 400, width: '100%' }}>
            <Typography>
                All Classes 
            </Typography>
         <DataGrid
           getRowId={(row: any) =>  row.class}
           rows={rows}
           columns={columns}
           initialState={{
             pagination: {
               paginationModel: {
                 pageSize: 5,
               },
             },
           }}
           pageSizeOptions={[5]}
           disableRowSelectionOnClick
         />
       </Box>
            }
    </div>
  )
}

export default AllClasses

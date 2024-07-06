import React, { useEffect, useState } from 'react'
import { getDatafromFirebase } from '../../Firebase/FirebaseMethods'
import { Box, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const AllTeachers = () => {
    const [studentData,setStudentData] = useState<any>()
    const [rows,setRows] = useState<any>()
    const randomId =()=> Math.random()

    const getTeachersData = () =>{
        getDatafromFirebase("teachers").then((data:any)=>{
            console.log(data.val());
            setStudentData(data);
            setRows(Object.values(data.val()));
            console.log(Object.values(data.val()));
            
        })
    }
    
    
    useEffect(()=>{
        getTeachersData();
    },[])
    const columns: GridColDef<(any)[number]>[] = [
        { field: 'schoolRollNumber', headerName: 'ID', width: 90 },
        {
          field: 'fname',
          headerName: 'First name',
          width: 130,
          
        },
        {
          field: 'Lname',
          headerName: 'Last name',
          width: 130,
          
        },
        {
            field: 'classTeacher',
            headerName: 'class',
            type: 'number',
            width: 100,
            
        },
        {
            field: 'subject',
            headerName: 'Subject',
            type: 'number',
            width: 130,
            
        },
        {
          field: 'gender',
          headerName: 'Gender',
          width: 100,
          
        },
        {
          field: 'salary',
          headerName: 'Salary',
          width: 200,
          
        },
        {
          field: 'contact',
          headerName: 'Contact',
          width: 200,
          
        },
        {
          field: 'address',
          headerName: 'Address',
          width: 250,
          
        },
        
      ];

      
  return (
    <div>
        {!studentData?<Box>
            <Typography>
                No Teachers Found
            </Typography>
        </Box>:
         <Box sx={{ height: 400, width: '100%' }}>
            <Typography>
                All Teachers
            </Typography>
         <DataGrid
           getRowId={(row: any) =>  randomId()}
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

export default AllTeachers

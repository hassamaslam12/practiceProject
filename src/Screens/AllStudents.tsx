import React, { useEffect, useState } from 'react'
import { delRecord, getDatafromFirebase } from '../Firebase/FirebaseMethods'
import { Box, Paper, Table, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import toast, { Toaster } from 'react-hot-toast'

import { Link, useNavigate, useParams } from 'react-router-dom';

const AllStudents = () => {
    const [studentData,setStudentData] = useState<any>()
    const [rows,setRows] = useState<any>()
    const [rowKeys,setRowsKeys] = useState<any>()

    const navigate = useNavigate()
    const navigateHandler =(node:any)=>{
        navigate(`/addStudent/${node}`)
    }

    const randomId =()=> Math.random()

    const getStudentsData = () =>{
        getDatafromFirebase("students").then((data:any)=>{
            console.log(data.val());
            setStudentData(data);
            setRows(Object.values(data.val()));
            setRowsKeys(Object.keys(data.val()));
        })
    }
    useEffect(()=>{
        getStudentsData();
    },[])

    const deleteStudent = (node:any)=>{
        delRecord(`students/${node}`).then(()=>{
            toast.success("Delete successful");
            setTimeout(()=>{
                window.parent.location = window.parent.location.href;

            },1000)

        })
    }

    const columns: GridColDef<(any)[number]>[] = [
        { field: 'schoolRollNumber', headerName: 'ID', width: 90 },
        {
          field: 'fname',
          headerName: 'First name',
          width: 150,
          
        },
        {
          field: 'Lname',
          headerName: 'Last name',
          width: 150,
          
        },
        {
            field: 'class',
            headerName: 'class',
            type: 'number',
            width: 100,
            
        },
        {
          field: 'gender',
          headerName: 'Gender',
          width: 100,
          
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

      const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
  return (
    <div><div><Toaster
    position="bottom-center"
    reverseOrder={true}
  /></div>
        {!studentData?<Box>
            <Typography>
                No Students Found
            </Typography>
        </Box>:   <>
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' ,textAlign:"center"}}>
      All Students
    </Box>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right"> Class</StyledTableCell>
            <StyledTableCell align="right"> Gender</StyledTableCell>
            <StyledTableCell align="right"> Contact</StyledTableCell>
            <StyledTableCell align="right"> Address</StyledTableCell>
            <StyledTableCell align="right"> Edit</StyledTableCell>
            <StyledTableCell align="right"> Delete</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row:any,index:number) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.fname}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Lname}</StyledTableCell>
              <StyledTableCell align="right">{row.class}</StyledTableCell>
              <StyledTableCell align="right">{row.gender}</StyledTableCell>
              <StyledTableCell align="right">{row.contact}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right"><EditIcon onClick={()=>{navigateHandler(rowKeys[index])}}/></StyledTableCell>
              <StyledTableCell align="right"><DeleteIcon onClick={()=>{deleteStudent(rowKeys[index])}}/></StyledTableCell>
             
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    //      <Box sx={{ height: 400, width: '100%' }}>
    //         <Typography>
    //             All Students 
    //         </Typography>
    //      <DataGrid
    //        getRowId={(row: any) =>  randomId()}
    //        rows={rows}
    //        columns={columns}
    //        initialState={{
    //          pagination: {
    //            paginationModel: {
    //              pageSize: 5,
    //            },
    //          },
    //        }}
    //        pageSizeOptions={[5]}
    //        disableRowSelectionOnClick
    //      />
    //    </Box>
            }
    </div>
  )
}

export default AllStudents

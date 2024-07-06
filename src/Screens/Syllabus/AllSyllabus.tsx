import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getDatafromFirebase } from '../../Firebase/FirebaseMethods';
import { Link, useNavigate } from 'react-router-dom';

const AllPayments = () => { 
    const navigate = useNavigate();

    const navigateToSingleSyllabus =(key:any)=>{
        navigate(`${key}`)
    }

    const [rows,setRows] =React.useState<any>()
    const [rowKey,setRowKey] =React.useState<any>()

    const getDataFromDatabasePayments = () => {
        getDatafromFirebase("syllabus").then((data:any) => {
            setRows(Object.values(data.val()));
            setRowKey(Object.keys(data.val()));

        })
    }
    console.log(rows);
    
    React.useEffect(() =>{
        getDataFromDatabasePayments()
    },[])

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
    <div>
      All Syllabuses
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Class</StyledTableCell>
            <StyledTableCell align="right">See Description</StyledTableCell>
         
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row:any,index:number) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.class}
              </StyledTableCell>
              <StyledTableCell align="right" onClick={()=>navigateToSingleSyllabus(rowKey[index])}>
               

                View Syllabus
                
                
                </StyledTableCell>
        
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default AllPayments

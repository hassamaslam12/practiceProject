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

const AllPayments = () => {

    const [rows,setRows] =React.useState<any>()

    const getDataFromDatabasePayments = () => {
        getDatafromFirebase("subjects").then((data:any) => {
            setRows(Object.values(data.val()));

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
      All Payments
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subject Name</StyledTableCell>
            <StyledTableCell align="right">class</StyledTableCell>
            <StyledTableCell align="right"> Teacher Name</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row:any,index:number) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.subjectName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.class}</StyledTableCell>
              <StyledTableCell align="right">{row.Teacher}</StyledTableCell>
             
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default AllPayments

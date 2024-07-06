import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { writeData } from '../../Firebase/FirebaseMethods';

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


// function createData(
//     classCode: number,
//   ac: number,
//   monthlyFee: number,
 
// ) {
//   return ({ classCode,ac,monthlyFee });
// }

const rows = [
   { classCode: 1,
    ac: 2000,
    monthlyFee: 5000,},
   { classCode: 2,
    ac: 2000,
    monthlyFee: 5000,},
   { classCode: 3,
    ac: 2000,
    monthlyFee: 5000,},
   { classCode: 4,
    ac: 3000,
    monthlyFee: 6000,},
   { classCode: 5,
    ac: 3000,
    monthlyFee: 6000,},
   { classCode: 6,
    ac: 3000,
    monthlyFee: 6000,},
   { classCode: 7,
    ac: 4000,
    monthlyFee: 7000,},
   { classCode: 8,
    ac: 4000,
    monthlyFee: 7000,},
   { classCode: 9,
    ac: 4000,
    monthlyFee: 7000,},
   { classCode: 10,
    ac: 4000,
    monthlyFee: 7000,},
//   createData(1,2000,5000),
//   createData(2,2000,6000),
//   createData(3,2000,7000),
//   createData(4,2000,8000),
//   createData(5,2000,9000),
//   createData(6,2000,9000),
//   createData(7,2000,9000),
//   createData(8,2000,10000),
//   createData(9,2000,10000),
//   createData(10,2000,10000),
];

export default function FeeStructure() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Class</StyledTableCell>
            <StyledTableCell align="right">Annual Charges</StyledTableCell>
            <StyledTableCell align="right">Monthly Fee</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.classCode}>
              <StyledTableCell component="th" scope="row">
                {row.classCode}
              </StyledTableCell>
              <StyledTableCell align="right">{row.ac}</StyledTableCell>
              <StyledTableCell align="right">{row.monthlyFee}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export {rows as fees}
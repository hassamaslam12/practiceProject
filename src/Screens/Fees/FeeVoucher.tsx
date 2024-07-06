import React, { useState } from 'react'
import {fees} from './FeesStructure'
import { Box, Button, TextField } from '@mui/material';
import Table from '../../Components/Table'
import { writeData } from '../../Firebase/FirebaseMethods';

const FeeVoucher = () => {
    console.log(fees);
    const [paid,setPaid] = useState(false);
    const [information,setInformation] = useState<any>(
        {
            nameOfStudent:"",
            classCode:'',
            FeeMonth:"",
            detailsEntered:false,
            feesCalc:0
        }
    )
    let temp ={id:1,name:information.nameOfStudent,class:information.classCode,feeMonth:information.FeeMonth,Fees:information.feesCalc};
    
    const inpChangeHandler = (event:any) =>{    
        setInformation((prev:any)=>({...prev,[event.target.id]:event.target.value}));
    }
    
    const generate = () =>  {
        setInformation((prev:any)=>({...prev,detailsEntered:true}));
         let feesCalc =fees.find(fee=>fee.classCode==information.classCode);
         setInformation((prev:any)=>({...prev,feesCalc:feesCalc}))
         
        }
        console.log("feesCalc",information.feesCalc);

        const sendPayments=()=>{
            writeData("payments",{
                name:information.nameOfStudent,
                className:information.classCode,
                feeMonth:information.FeeMonth,
                FeesPaid:information.feesCalc.monthlyFee,
                PaidDate:Date.now()
            },true).then(()=>{
                setPaid(!paid)
            })
        }
        
  return (
    <div>
        <Box>
            <TextField onChange={(e)=>{inpChangeHandler(e)}} value={information.nameOfStudent} id="nameOfStudent" variant='outlined' label="Name Of Student"/>
            <TextField onChange={(e)=>{inpChangeHandler(e)}} value={information.classCode} id="classCode" variant='outlined' label="Class"/>
            <TextField onChange={(e)=>{inpChangeHandler(e)}} value={information.FeeMonth} id="FeeMonth" variant='outlined' label="Fees For The Month"/>
            <Button onClick={()=>{generate()}} variant='contained' sx={{marginTop:"7px",marginLeft:"10px"}}>Generate</Button>

        </Box>

        
            {information.detailsEntered && <Box>
                    <Table tableHeader={["id","name","class","feeMonth","Fees"]} tableData={[{id:1,name:information.nameOfStudent,class:information.classCode,feeMonth:information.FeeMonth,Fees:information.feesCalc.monthlyFee || 5000}]} />
                    <Button onClick={()=>{sendPayments()}} variant='contained' sx={{marginTop:"7px",marginLeft:"10px"}}>Pay</Button>

                </Box>}
        
                {
                    paid &&  <Box component="section" sx={{m:2, p: 2, border: '1px solid grey',backgroungColor:"green" }}>
                    Payment Complete
                  </Box>
                }
    </div>
  )
}

export default FeeVoucher

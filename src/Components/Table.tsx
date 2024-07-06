import React from 'react'

const Table = (props:any) => {
    const {tableHeader,tableData} = props;
    const styleObj = {
        
            border: "1px solid white",
        
    }
    const styleColour ={
        backgroundColor: "#96D4D4"

    }
  return (
    <div>
        <table style={styleObj}>
            <thead >
                <tr>
                {tableHeader.map((tableHead:any)=><th style={{...styleObj,...styleColour,minWidth:"200px"}}>{tableHead}</th>)}
                </tr>
            </thead>

            <tbody>
                {tableData.map((tableData:any)=><tr>
                    {tableHeader.map((tableHead:any)=><td style={{...styleObj,...styleColour,textAlign:"center"}}>{tableData[tableHead]}</td>)}
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Table

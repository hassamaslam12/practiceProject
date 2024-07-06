import { child, get, getDatabase, push, ref, remove, set } from "firebase/database";
import app from "./Firebaseconfig";
import Modal from '@mui/material/Modal';
import { Box, Typography } from "@mui/material";
import React from "react";


const database = getDatabase(app);


 



const writeData = (location:string,data:any,list?:boolean) =>{

return new Promise<any>((resolve,reject)=>
{
    let dbRef = ref(database,location);
    if(list){
        dbRef = push(dbRef)
    }
    set(dbRef,data).then(()=>{
        resolve(data);
        
    })
    .catch(()=>{
        reject();
    })
})

}


const getDatafromFirebase = (location: string)=>{
    const dbRef = ref(database);

    return new Promise((resolve, reject)=>{

    get(child(dbRef,location)).then((snapshot)=>{
        if(snapshot.exists()){
            console.log(snapshot);
            resolve(snapshot);
        }else{
            console.log("no data available" );
            
        }
    }
).catch(err => {
    console.log(err)
    reject(err);
});
})

}

const delRecord  = (nodeName:string) => {
    return new Promise((resolve, reject) =>{
      const reference = ref(database,nodeName);
      remove(reference)
      .then(() => {resolve("success");})
      .catch(()=>reject("error"))
    }
  )
  }




export {
    writeData,
    getDatafromFirebase,
    delRecord
}
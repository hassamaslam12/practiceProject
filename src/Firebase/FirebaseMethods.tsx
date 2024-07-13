import { child, get, getDatabase, push, ref, remove, set } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";
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

  const auth = getAuth(app)

const signinVerification = (email:string,password:string,name:string) =>{
    return new Promise((resolve, reject) =>{

        createUserWithEmailAndPassword(auth,email,password)
        .then((res:any)=>{
            resolve("success")
            console.log(res);
            writeData(`users/${res.user.uid}`,{name:name,email:email})
        })
        .catch(()=>reject("error"))
    })
}

const loginVerification = (email:string,password:string) =>{
    return new Promise((resolve, reject) =>{

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            resolve("success")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            reject(errorMessage)
        });
        })

}


const alreadySignedIn:()=>any = () =>{
    return new Promise((resolve, reject)=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const uid = user.uid;
                resolve( uid)
            } else {
                reject(0)
            }
    
    }
    )
    })

}


    const logout = ()=>{

        return new Promise((resolve, reject) => {

            signOut(auth).then(() => {
                resolve("done")
            }).catch((error) => {
                reject(error)
            });
        })
          
    }



    const editPassword =(newPassword:string)=>{
        const user:any = auth.currentUser;

updatePassword(user, newPassword).then(() => {
    alert("Password Changed")    
}).catch((error) => {
  alert("error")
  console.log(error);
  
});
    }


export {
    writeData,
    getDatafromFirebase,
    delRecord,
    signinVerification,
    loginVerification,
    alreadySignedIn,
    logout,
    editPassword
}
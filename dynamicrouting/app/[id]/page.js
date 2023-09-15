"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
  const {id}=params;
  console.log(id)
  const [users, setusers] = useState('');
  const getdatas= async()=>{
    
    const {data}= await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
    setusers(data);
   //  console.log(users)
     }
     useEffect(()=>{
       getdatas()
     },[]);
  
  return (
    <div className=' bg-green-300 h-ful w-full text-black text-center'>
      {/* {users.username} */}
      {/* {JSON.stringify(users.phone)} */}
      {JSON.stringify(users)}

    

      </div>
  )
}

export default page
"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    const {id}=params;

    const [users, setusers] = useState([])
    const GetData = async ()=>{
  const {data}= await axios.get('https://jsonplaceholder.typicode.com/users/'+ id);
  setusers(data);
  
    }
    useEffect(()=>{
      GetData();
  
    },[])
  
   
   return ( 
    <>
    
    <h1 className=' text-3xl text-green-400'>Page Routing Dynamic 
    {JSON.stringify(users)}
    </h1>
    </>
  )
}

export default page
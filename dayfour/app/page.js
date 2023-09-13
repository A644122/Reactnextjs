"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [users, setusers] = useState([])
  const GetData = async ()=>{
const {data}= await axios.get('https://jsonplaceholder.typicode.com/users');
setusers(data);

  }
  useEffect(()=>{
    GetData();

  },[])
  return (
    <>
    <h1 className=' text-2xl text-center'>Learning Dynamic Routing</h1>
    <button onClick={GetData} className=' bg-green-700 
    rounded my-10 mx-10 p-10 py-5 px-10'>Getdata</button>
    <div className=' bg-gray-300 mt-10 my-10'>
      
      <ul>
        {users.map((e)=>{
        return <li>{e.username}.... <a href={`/ ${e.id}`}>Explore</a> </li>

        })}
      </ul>
    </div>
    </>
  )
}

export default page
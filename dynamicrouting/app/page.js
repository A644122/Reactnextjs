"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [users, setusers] = useState([])
  const getdatas= async()=>{
    
 const {data}= await axios.get('https://jsonplaceholder.typicode.com/users/');
 setusers(data);
//  console.log(users)
  }
  useEffect(()=>{
    getdatas()
  },[]);
  return (
    <>
    <button onClick={getdatas} className=' rounded bg-gray-700 text-3xl  my-10 mx-10 p-8 '>Clickdata</button>

    <div className=' bg-gray-200 mt-10 h-full'>

<ul>{users.map((e)=>{
  // console.log(e.username)
 return <li>{e.username}...<a href={`/${e.id}`}>Explore</a></li>

})}
</ul>

    </div>
    </>
  )
}

export default page
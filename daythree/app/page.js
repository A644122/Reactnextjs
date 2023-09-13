"use client"

import React, { useState } from 'react'

const page = () => {
  // useState[uname,setuname]=useState('afroz');
  const [first, setfirst] = useState('');
  
  return (

    <>
  <div className='text-center'>
    <h1  className='text-5xl'>My todo app in react</h1>
    <form>
      <input type='text'
       className='border-2 border-zinc-700 px-20 py-3 mt-10' 
      value={first}
      onChange={(event)=>{
        setfirst(event.target.value);
        console.log(first)
      }}
      
      />
         
    </form>
  </div>
    </>
  )
}

export default page
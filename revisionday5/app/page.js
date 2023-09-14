"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const page = () => {
  const getlog=()=>{
    toast('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  }
  return (
    <>
    <h1 onClick={getlog} className=' text-center text-4xl underline  text-green-400'>Login</h1>
    <ToastContainer/>
    </>
  )
}

export default page
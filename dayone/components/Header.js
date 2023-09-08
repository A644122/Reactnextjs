
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>

<div className=' flex justify-between bg-green-500 h-16'>
 <div>
 <h1 className=' text-3xl text-blue-500 mx-7 my-3'>Logo</h1>
 </div>
 <div>


    <Link className=' px-5 text-2xl text-red-600 mx-7 my-3' 
    href='/About'>About</Link>
    <Link className=' px-5 text-2xl text-yellow-300 mx-7 my-3' 
    href='/Contact'>Contact</Link>
    <Link className=' px-5 text-2xl text-yellow-500 mx-7 my-3' 
    href='/Product'>Product</Link> 
    </div>

</div>


   
   
    
    
    
    </>
  )
}

export default Header
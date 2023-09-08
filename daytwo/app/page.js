'use client'
import axios from 'axios'
import React,{useState} from 'react'

const page = () => {
  const [Images,setImges]= useState([])
  const getimages= async ()=>{
    
    // console.log("hellow")
     const res= await axios.get('https://picsum.photos/v2/list');
     const getdata=res.data;
    //  console.log(Imges)
     setImges(getdata);
  }
  return (
    <div>
  <button onClick = {getimages} className='py-4 px-6 bg-green-600 text-3xl rounded-md font-bold'>getimages</button>

    <div className=' p-9 gap-3'>
      {Images.map((item,i)=>{
        // return <h1 key={i}>,{item.author}</h1>
        return <img 
         key={i}
    
         src={item.download_url}
         width={200}
         height={200}
         className='inline-block m-8'
        
         />
      })}
     
    </div>
    </div>
  )
}

export default page
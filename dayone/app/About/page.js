
"use client"
import React,{useState} from 'react'
import axios from 'axios'

const page = () => {
const [Images, setImages] = useState([])
const Getfun= async()=>{

  try{
    const respon= await axios.get('https://picsum.photos/v2/list')
    const Data=respon.data;
    setImages(Data);
    console.log(Images)
  
  }
  catch(erroe){
    console.log('fetching erro images')
  }
  
 
}

  return (
    <>
  
  <div>
 

  About Pages

  <button onClick={Getfun} className=' bg-green-400 rounded-md py-4 mt-5 mx-5 text-gray-600  font-bold px-6 text-2xl'>GetImg</button>
  </div>
  <div className=' p-10'>

    {Images.map((item,i)=>{
      // console.log(item)
<img src={item.download_url}
key={i}
width={200}
height={200}
className=' m-10 rounded inline-block'
  
/>    
      
    })}
    </div>
    
    </>
  )
}

export default page
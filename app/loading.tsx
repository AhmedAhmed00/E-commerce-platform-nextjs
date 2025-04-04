import Image from 'next/image'
import React from 'react'
import loader from "@/public/images/loader.gif"

export default function loading() {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <Image src={loader} height={150} width={150} alt='loading spinner' /> 
    </div>
  )
}
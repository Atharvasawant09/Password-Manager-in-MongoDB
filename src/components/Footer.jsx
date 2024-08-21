import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center flex-col bg-zinc-800 text-white  w-full'>
         <div className="logo font-bold text-white text-2xl">
          <span className='text-red-800'>&lt;</span>
          Hunter's
          <span className='text-red-800'>Vault/&gt;</span>
          </div>
          <div className='flex justify-center items-center my-0.5'>
      Created with <img className='w-7 mx-1'src={`${import.meta.env.VITE_PUBLIC_URL}/icons/heart.png`}  alt="" />   by Atharvasawant09

          </div>
    </div>
  )
}

export default Footer

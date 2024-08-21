import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-zinc-800 text-white '>
      <div className="flex items-center justify-between px-4 py-5 h-14 mycontainer">
        <div className="logo font-bold text-white text-2xl">
          <span className='text-red-800'>&lt;</span>
          Hunter's
          <span className='text-red-800'>Vault/&gt;</span>
          </div>
        {/* <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="/about">About</a>
                <a className='hover:font-bold' href="/contact">Contact</a>
            </li>
        </ul> */}
        <button  className="icons flex justify-between items-center text-white bg-red-800 my-5 rounded-full ring-white ring-1  "><img className='w-10 p-1 invert ' src="/icons/github.svg" alt="github logo" />
        <a className='px-2 font-bold ' href="https://github.com/Atharvasawant09">GitHub</a>
        </button>
        </div>
    </nav>
  )
}

export default Navbar

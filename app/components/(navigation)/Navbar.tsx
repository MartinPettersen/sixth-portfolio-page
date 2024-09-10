import React from 'react'

const Navbar = () => {
  return (
    <div className='font-manrope flex flex-row gap-6 fixed right-10 top-0 pt-4'>
        <h2 className='hover:cursor-pointer'>Home</h2>
        <h2 className='hover:cursor-pointer'>About</h2>
        <h2 className='hover:cursor-pointer'>Education</h2>
        <h2 className='hover:cursor-pointer'>Projects</h2>
    </div>
  )
}

export default Navbar
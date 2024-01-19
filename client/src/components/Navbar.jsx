import React from 'react'

const Navbar = () => {
  return (
    <header className='mx-auto px-4 md:px-10 lg:px-20 xl:px-48'>
        <nav className='h-24 flex items-center justify-between'>
            <h3 className='text-red-400 text-3xl font-bold cursor-pointer'>NapBook</h3>
            <div className='text-red-400 font-medium cursor-pointer'>
                Sign In
            </div>
          

        </nav>
        
    </header>
  )
}

export default Navbar
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.userState);


  return (
    <header className='mx-auto px-4 md:px-10 lg:px-20 xl:px-48'>
        <nav className='h-24 flex items-center justify-between'>
            <Link to='/'><h3 className='text-red-400 text-3xl font-bold cursor-pointer hover:text-red-500'>NapBook</h3></Link>
            {isAuthenticated?<div className="text-center">
                                        <h2 className="capitalize text-xl font-semibold">Hi, {user.username}</h2>
                                        <span>Email: {user.email}</span>
                                    </div>:
            <div className='text-red-400 font-medium cursor-pointer'>
                <Link to='/login'>Sign In</Link>
            </div>}
          

        </nav>
        
    </header>
  )
}

export default Navbar
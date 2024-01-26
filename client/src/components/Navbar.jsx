import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logoutAction } from '../redux/actions/userActions';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const { isAuthenticated, user } = useSelector((state) => state.userState);
const logoutHandler=()=>{
  dispatch(logoutAction())
  navigate("/")
 
}
const accountHandler = () => {
  // setAnchorEl(null);
  navigate('/account');
}

  return (
    <header className='mx-auto px-4 md:px-10 lg:px-20 xl:px-48'>
        <nav className='h-24 flex items-center justify-between'>
            <Link to='/'><h3 className='text-red-400 text-3xl font-bold cursor-pointer hover:text-red-500'>NapBook</h3></Link>
            {user?<div className="text-center flex gap-4 items-center">
                              <div>
                                        <h2 className="capitalize text-xl font-semibold">Hi, {user.username}</h2>
                                        <span>Email: {user.email}</span></div>
                                        <div>
                                          <button onClick={accountHandler} className=" text-gray-50 bg-blue-500 hover:text-white-50 hover:bg-blue-600 border-solid border py-2 px-2 rounded-lg w-18 text-center transition duration-200 box-border font-medium">Account</button>
                                        <button onClick={logoutHandler} className="  text-gray-50 bg-red-500 hover:text-white-50 hover:bg-red-600 border-solid border py-2 px-2 rounded-lg w-18 text-center transition duration-200 box-border font-medium">Log out</button></div>
                                    </div>:
            <div className='text-red-400 font-medium cursor-pointer'>
                <Link to='/login'>Sign In</Link>
            </div>}
          

        </nav>
        
    </header>
  )
}

export default Navbar
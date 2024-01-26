import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerAction } from '../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const registerHandler=(e)=>{
    e.preventDefault()
    dispatch(registerAction({username,password,email}))
    navigate("/")
  }

  return (
    <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 md:text-3xl">
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                 Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
              
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                 Email
              </label>
              <div className="mt-2">
                <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
              
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
               
              </div>
              <div className="mt-2">
                <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div>
              <button
                onClick={registerHandler}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

         
        </div>
      </div>
    </div>
  )
}

export default Register
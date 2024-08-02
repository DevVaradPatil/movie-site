import React from 'react'
import back from '../assets/backgroundImage.png'
import logo from '../assets/net-logo.png'
import { Link, NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-screen bg-center w-full relative flex flex-col justify-center items-center' style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className='absolute w-full h-full top-0 left-0 z-10 bg-black/60 flex flex-col justify-center items-center'>
      <div className='w-full flex items-center absolute top-5 z-20'>
        <img className='w-[170px] ml-[10%]' src={logo} alt="" />
      </div>

      <div className='bg-primary-bg w-[90%] max-w-md p-10 rounded-md z-20 flex flex-col justify-center'>
        <div className='text-primary-text text-3xl text-center ml font-medium'>
          Welcome Back, Cinephile!
        </div>
        <div className='mt-[12%] w-full flex flex-col gap-4 items-center justify-center'>
          <input className='bg-secondary-bg w-full p-2 text-primary-text rounded-sm' type="text" placeholder='E-Mail address' />
          <input className='bg-secondary-bg w-full p-2 text-primary-text rounded-sm' type="password" placeholder='Password' />
          <button className='bg-button-primary-bg w-full p-2 text-primary-text mt-3 rounded-sm font-medium text-lg'>Sign in</button>

          <div className='flex mt-7 gap-1'>
            <p className='text-primary-text'>Don't have an account?</p>
            <NavLink to='/signup' className='text-accent-primary'>Sign Up</NavLink>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login
import React from 'react'
import back from '../assets/backgroundImage.png'
import logo from '../assets/net-logo.png'
import { Link, NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-screen bg-center w-full relative' style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className='absolute w-full h-full top-0 left-0 z-10 bg-black/60 flex flex-col items-center'>
      <div className='w-full flex items-center h-[120px] z-20'>
        <img className='w-[170px] ml-[10%]' src={logo} alt="" />
      </div>

      <div className='bg-primary-bg h-[69%] w-[28%] p-[3%] flex flex-col justify-center rounded-md z-20'>
        <div className='text-primary-text text-3xl ml font-medium'>
          Sign In
        </div>
        <div className='mt-[12%] w-full flex flex-col gap-4 items-center justify-center'>
          <input className='bg-secondary-bg w-full p-2 text-primary-text rounded-sm' type="text" placeholder='E-Mail address' />
          <input className='bg-secondary-bg w-full p-2 text-primary-text rounded-sm' type="password" placeholder='Password' />
          <button className='bg-button-primary-bg w-full p-2 text-primary-text mt-3 rounded-sm font-medium text-lg'>Sign Up</button>

          <div className='flex mt-7 gap-1'>
            <p className='text-primary-text'>To create new account</p>
            <NavLink to='/signup' className='text-accent-primary'>Sign Up</NavLink>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login
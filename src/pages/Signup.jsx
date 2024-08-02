import React from 'react'
import back from '../assets/backgroundImage.png'
import logo from '../assets/net-logo.png'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-center w-full relative' style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
     <div className='absolute w-full h-full top-0 left-0 z-10 bg-black/60 flex flex-col justify-center items-center'>
      <div className='w-full flex items-center absolute top-5 z-20'>
        <img className='w-[170px] ml-[10%]' src={logo} alt="" />
      </div>

      <div className='bg-primary-bg  w-[90%] max-w-md p-10 rounded-md z-20'>
        <div className='text-primary-text text-3xl ml font-medium text-center'>
          Create your account
        </div>
        <div className='mt-[10%] w-full flex flex-col gap-4 items-center justify-center'>
          <div className='flex gap-5'>
            <input className='bg-secondary-bg w-1/2 p-2 text-primary-text rounded-sm' type="text" placeholder='First Name' />
            <input className='bg-secondary-bg w-1/2 p-2 text-primary-text rounded-sm' type="text" placeholder='Last Name' />
          </div>
          <input className='bg-secondary-bg w-full p-2 text-primary-text rounded-sm' type="text" placeholder='E-Mail address' />
          <input className='bg-secondary-bg w-full p-2 text-primary-text rounded-sm' type="password" placeholder='Password' />
           <input className='bg-secondary-bg w-full p-2 text-primary-text rounded-sm' type="password" placeholder='Confirm Password' />
          <button className='bg-button-primary-bg w-full p-2 text-primary-text mt-3 rounded-sm font-medium text-lg'>Sign Up</button>

          <div className='flex mt-6 gap-1'>
            <p className='text-primary-text'>Already have an account?</p>
            <NavLink to= '/login' className='text-accent-primary'>LogIn</NavLink>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Signup
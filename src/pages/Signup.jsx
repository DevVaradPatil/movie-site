import React from 'react'
import back from '../assets/backgroundImage.png'
import logo from '../assets/net-logo.png'

const Signup = () => {
  return (
    <div>
      <div className='h-screen bg-center relative' style={{backgroundImage:`url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
          <div className='absolute inset-0 bg-black flex flex-col items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <div className='w-screen flex items-center h-[120px]'>
              <img className='w-[170px] ml-[10%]' src={logo} alt="" />
            </div>

            <div className='bg-primary-bg h-[70%] w-[28%] p-[3%] rounded-md'>
              <div className='text-primary-text text-3xl ml font-bold'>
                Sign Up
              </div>
              <div className='mt-[10%] w-full flex flex-col gap-4 items-center justify-center'>
                <div className='flex gap-5'>
                  <input className='bg-secondary-bg w-[50%] h-[37px] p-2 text-primary-text rounded-sm' type="text" placeholder='First Name'/>
                  <input className='bg-secondary-bg w-[50%] h-[37px] p-2 text-primary-text rounded-sm' type="text" placeholder='Last Name'/>
                </div>
                <input className='bg-secondary-bg w-[100%] h-[37px] p-2 text-primary-text rounded-sm' type="text" placeholder='E-Mail address' />
                <input className='bg-secondary-bg w-[100%] h-[37px] p-2 text-primary-text rounded-sm' type="password" placeholder='Password' />
                <button className='bg-button-primary-bg w-[100%] h-[37px] p-2 text-primary-text mt-[4%] rounded-sm'>Sign Up</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Signup
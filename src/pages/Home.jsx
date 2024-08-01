import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' bg-primary-bg h-screen text-primary-text'>
      Home
      <div className='w-full h-10 bg-secondary-bg text-secondary-text '>
      see more
      </div> 
      <button className=' bg-button-primary-bg text-button-primary-text'>
      Watch Now
      </button>
      <NavLink to='signup' className='mt-5'>SignUp</NavLink>
      <NavLink to='login' className='mt-5'>Login</NavLink>
    </div>
  )
}

export default Home
// src/pages/Login.js
import React, { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Import the auth instance
import back from '../assets/backgroundImage.png';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { UserContext } from '../contexts/UserContext';
import logo from '../assets/netflix.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully!');
      setUser(email);
      navigate('/');
    } catch (err) {
      toast.error("Invalid Credentials! Try again.");
    }
  };

  return (
    <div className='h-screen bg-center w-full relative flex flex-col justify-center items-center' style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className='absolute w-full h-full top-0 left-0 z-10 bg-black/60 flex flex-col justify-center items-center'>

        <form onSubmit={handleLogin} className='bg-primary-bg w-[90%] max-w-md p-10 rounded-md z-20 flex flex-col justify-center'>
         <div className='flex justify-center items-center w-full '>
          <img src={logo} alt="" className='w-24 h-24 mb-5' />
         </div>
          <div className='text-primary-text text-3xl text-center ml font-medium'>
            Welcome Back, Cinephile!
          </div>
          <div className='mt-[12%] w-full flex flex-col gap-4 items-center justify-center'>
            <input
              className='bg-secondary-bg w-full p-2 text-primary-text rounded-sm'
              type="email"
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='bg-secondary-bg w-full p-2 text-primary-text rounded-sm'
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type='submit'
              className='bg-button-primary-bg w-full p-2 text-primary-text mt-3 rounded-sm font-medium text-lg'>
              Sign in
            </button>

            <div className='flex mt-7 gap-1'>
              <p className='text-primary-text'>Don't have an account?</p>
              <NavLink to='/signup' className='text-accent-primary'>Sign Up</NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// src/pages/Signup.js
import React, { useContext, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import back from '../assets/backgroundImage.png';
import logo from '../assets/net-logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { UserContext } from '../contexts/UserContext';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password does not match!")
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user.email);
      toast.success("Account created successfully!")
      navigate('/');
    } catch (err) {
      toast.error("User already exists!")
    }
  };

  return (
    <div className='h-screen flex justify-center items-center bg-center w-full relative' style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className='absolute w-full h-full top-0 left-0 z-10 bg-black/60 flex flex-col justify-center items-center'>
        <div className='w-full flex items-center absolute top-5 z-20'>
          <img className='w-[170px] ml-[10%]' src={logo} alt="" />
        </div>

        <div className='bg-primary-bg w-[90%] max-w-md p-10 rounded-md z-20'>
          <div className='text-primary-text text-3xl ml font-medium text-center'>
            Create your account
          </div>
          <div className='mt-[10%] w-full flex flex-col gap-4 items-center justify-center'>
            <div className='flex gap-5'>
              <input
                className='bg-secondary-bg w-1/2 p-2 text-primary-text rounded-sm'
                type="text"
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className='bg-secondary-bg w-1/2 p-2 text-primary-text rounded-sm'
                type="text"
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              className='bg-secondary-bg w-full p-2 text-primary-text rounded-sm'
              type="email"
              placeholder='E-Mail address'
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
            <input
              className='bg-secondary-bg w-full p-2 text-primary-text rounded-sm'
              type="password"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              onClick={handleSignup}
              className='bg-button-primary-bg w-full p-2 text-primary-text mt-3 rounded-sm font-medium text-lg'>
              Sign Up
            </button>

            <div className='flex mt-6 gap-1'>
              <p className='text-primary-text'>Already have an account?</p>
              <NavLink to='/login' className='text-accent-primary'>LogIn</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

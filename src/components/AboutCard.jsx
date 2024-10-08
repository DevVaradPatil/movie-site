import React from 'react'
import img from '../assets/saket.jpg'

const AboutCard = ({aboutCard, gradient}) => {
  return (
    <div className='bg-primary-bg flex text-primary-text relative'>
        <div className='flex items-center flex-col h-[300px] w-[340px] bg-[#1F1F23] rounded-lg transform transition-transform duration-300 hover:scale-105'>
            <div className={`${gradient} w-full p-6 rounded-tl-lg rounded-tr-lg text-white h-[120px]`}></div>
            <div className='pt-[80px] flex flex-col justify-center items-center'>
                <p className='text-xl font-semibold'>{aboutCard.name}</p>
                <p className='text-xl font-semibold'>{aboutCard.prn}</p>
            </div>
            <div className='w-[140px] h-[140px] flex justify-center items-center absolute top-[50px] rounded-full'>
                <img className='object-cover w-full h-full rounded-full'  src={aboutCard.img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutCard
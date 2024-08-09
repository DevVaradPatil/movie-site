import React from 'react'

const Card = ({image, title, year, rating}) => {
  const rating_percent = Math.round(rating*10);
  return (
    <div className='w-48 mb-8'>
        <div className='w-[170px] h-[240px] relative rounded-md' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className='w-8 h-8 flex items-center left-1 top-1 absolute justify-center rounded-full' style={
            {
              backdropFilter: 'blur(2px)',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              color: 'white',
            }
          }>
          <div className='text-[12px]'>{rating_percent}%</div>
          </div>
        </div>
        <div>
            <h1 className='text-primary-text mt-2 text-[14px] truncate'>{title}</h1>
            <h3 className='text-[12px] text-secondary-text
            '>{year}</h3>
        </div>
    </div>
  )
}

export default Card
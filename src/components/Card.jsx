import React from 'react'

const Card = ({image, title, subtitle}) => {
  return (
    <div className='w-48'>
        <div className='w-[170px] h-[240px] rounded-md' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
        <div>
            <h1 className='text-primary-text'>{title}</h1>
            <h3 className='text-sm
            '>{subtitle}</h3>
        </div>
    </div>
  )
}

export default Card
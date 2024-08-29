import React from 'react'

const Card = ({ image, title, year, rating }) => {
  const rating_percent = Math.round(rating * 10);

  // Determine the color based on the rating percentage
  let progressColor;
  if (rating_percent < 50) {
    progressColor = 'red';
  } else if (rating_percent > 75) {
    progressColor = 'green';
  } else {
    progressColor = 'yellow';
  }

  return (
    <div className='w-48 mb-8'>
      <div
        className='w-[170px] h-[240px] relative rounded-md'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Wrapper for Circular Progress Bar and Rating */}
        <div className='absolute left-1 top-1' style={{ width: '50px', height: '50px' }}>
          {/* SVG for Circular Progress Bar */}
          <svg
            className='absolute inset-0'
            width='40'
            height='40'
            viewBox='0 0 40 40'
          >
            <circle
              cx='20'
              cy='20'
              r='18'
              stroke='#e6e6e6'
              strokeWidth='4'
              fill='none'
            />
            <circle
              cx='20'
              cy='20'
              r='18'
              stroke={progressColor}
              strokeWidth='4'
              fill='none'
              strokeDasharray='113'
              strokeDashoffset={113 - (113 * rating_percent) / 100}
              transform='rotate(-90 20 20)'
            />
          </svg>

          {/* Rating Percentage Div */}
          <div
            className='absolute inset-0 flex items-center justify-center rounded-full z-0'
            style={{
              color: 'white',
              width: '40px',
              height: '40px',
            }}
          >
            <div className='text-[12px]'>{rating_percent}<sup>%</sup></div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-primary-text mt-2 text-[14px] truncate'>{title}</h1>
        <h3 className='text-[12px] text-secondary-text'>{year}</h3>
      </div>
    </div>
  )
}

export default Card

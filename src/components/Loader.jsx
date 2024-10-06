import React from 'react'
import { BounceLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='w-full h-[200px] flex items-center justify-center'>
        <BounceLoader color='#f56565' size={50} />
    </div>
  )
}

export default Loader
import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className='animate-spin rounded-full h-14 w-14 border-2 border-t-primary'></div>
    </div>
  )
}

export default Loading
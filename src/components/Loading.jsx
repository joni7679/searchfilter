import React from 'react'
import Shimmer from './Shimmer'

function Loading() {
  return (
    <>
      <main className='w-full bg-gray-950 h-screen flex items-center justify-center'>
        <h1 className='text-white font-semibold'>
          <Shimmer />
        </h1>
      </main>
    </>
  )
}

export default Loading
import React from 'react'
import Shimmer from './Shimmer'

function Loading() {
  return (
    <>
      <main className='w-full bg-gray-950 h-screen flex items-center justify-center'>

        <Shimmer />

      </main>
    </>
  )
}

export default Loading
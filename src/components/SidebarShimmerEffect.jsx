import React from 'react'

function SidebarShimmerEffect() {
    return (
        <>
            <div className={`bg-gray-800 w-full min-h-screen p-5 shimmer-effect `}>
                <h1 className='text-white capitalize text-2xl shimmer-effect' ></h1>
                <ul className='w-full h-[80vh] overflow-scroll sidebar shimmer-effect'>

                </ul>
            </div>
        </>
    )
}

export default SidebarShimmerEffect
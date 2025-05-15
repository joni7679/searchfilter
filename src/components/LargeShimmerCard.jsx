import React from 'react'

function LargeShimmerCard() {
    const items = new Array(3).fill('');

    return (
        <>
            <div className='p-4 w-full min-h-screen flex  items-center justify-center flex-wrap '>
                <div className='w-[60vw] mt-5 h-auto border-2 border-white shadow-2xs rounded p-5 bg-gray-800 flex gap-5 
                                   items-product'>
                    <div className='img-list '>
                        {items.map((_, index) => {
                            return (
                                <div key={index} className='w-16 h-16 bg-gray-900 mt-2 rounded-xl shimmer-effect'>

                                </div>
                            )
                        })}
                    </div>
                    <div className='main-img-div w-60 h-60 flex-shrink-0 shimmer-effect'>

                    </div>

                    <div className='shimmer-effect'>

                    </div>
                </div>
            </div>
            <div className='w-[60vw] h-[25rem] overflow-scroll review mt-5 border-2 border-white shadow-2xs rounded p-5 bg-gray-800 flex gap-5'>

                <div className="w-[60vw] h-[25rem] mt-5 border-2 border-white shadow-2xl rounded p-5 bg-gray-800 flex items-center flex-col gap-5 shimmer-effect">

                </div>
            </div>

        </>
    )
}

export default LargeShimmerCard
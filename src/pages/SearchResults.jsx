import React, { lazy, Suspense, useState } from 'react'
const Navbar = lazy(() => import('../components/Navbar'));

import Loading from '../components/Loading';
// import Sidebar from '../components/Sidebar'


function SearchResults({ results }) {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <main className='w-full bg-gray-900'>
                    <Navbar />
                    <div className="flex  md:flex-row items-start">
                        <div className='w-full md:w-[20%]'>
                            {/* <Sidebar/> */}
                        </div>
                        <div className="w-full md:w-[80%] bg-gray-900">
                        </div>
                    </div>
                </main>
            </Suspense>
        </>
    )
}

export default SearchResults
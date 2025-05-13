import React from 'react'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='w-full p-5 bg-gray-700  shadow-2xs text-white z-30 flex items-center gap-9 justify-between '>
                <nav className='flex items-center gap-4'>
                    <Link to={`/`}>Home</Link>
                </nav>
                <SearchBox  />
            </nav>
        </>
    )
}

export default Navbar
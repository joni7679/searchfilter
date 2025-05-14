import React from 'react'

function Sidebar({ categories }) {
    return (
        <>
            <div className='bg-gray-800 w-full h-screen p-5'>
                <h1 className='text-white capitalize text-2xl'>categories</h1>
                <ul className='w-full  h-[80vh] overflow-scroll sidebar'>
                    {
                        categories.map((categorie, index) => {
                            return (
                                <li className='text-white  capitalize cursor-pointer mt-3' key={index}>{categorie.slug}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Sidebar
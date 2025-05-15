import React, { useContext, useState } from 'react'
import { CategoryData } from '../context/CategoriesContext'
import { RxCross2 } from 'react-icons/rx';
import { CiMenuFries } from 'react-icons/ci';

function Sidebar({ isopen, SetisOpen }) {


    let { categories, setCategories, loading } = useContext(CategoryData);
    console.log(categories);
    if (loading) {
        return <h1 className='text-white'>loading......</h1>
    }

    return (
        <>
            <button className='px-[25px]  absolute top-[10%] left-[1%] py-[15px] bg-[#364153] rounded text-white cursor-pointer' onClick={() => SetisOpen(!isopen)}>
                {
                    isopen ?
                        (<RxCross2 />) : (

                            <CiMenuFries />
                        )
                }
            </button>

            <div className={`bg-gray-800 w-full min-h-screen p-5 ${isopen ? "active" : ""}`}>
                <h1 className='text-white capitalize text-2xl' >categories</h1>
                <ul className='w-full h-[80vh] overflow-scroll sidebar'>
                    {categories.map((categorie, index) => (
                        <li className='text-white capitalize cursor-pointer mt-3' key={index}>
                            {categorie.slug}
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Sidebar
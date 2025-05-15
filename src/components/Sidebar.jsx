import React, { useContext, useState } from 'react'
import { CategoryData } from '../context/CategoriesContext'
import { RxCross2 } from 'react-icons/rx';
import { CiMenuFries } from 'react-icons/ci';
import SidebarShimmerEffect from './SidebarShimmerEffect';
import { useNavigate } from 'react-router-dom';

function Sidebar({ isopen, SetisOpen }) {
    let navigate=useNavigate()
    let { categories, setCategories, loading, setCatname } = useContext(CategoryData);
    // console.log("categories data is", categories);
    if (loading) {
        return <SidebarShimmerEffect />
    }

    // handlecategorie
    const handleCategory = (categorie) => {
        setCatname(categorie.slug);
        console.log("categorie object:", categorie);
        // alert(cat.slug);
        console.log(categorie.slug);
        navigate(`/category/?categorie=${encodeURIComponent(categorie.name)}`)

    };
    let categoriesData = (
        <ul className='w-full h-[80vh] overflow-scroll sidebar'>
            {categories.map((categorie, index) => (
                <li onClick={() => handleCategory(categorie)}
                    className='text-white capitalize  mt-3 cursor-pointer'
                    key={index}>
                    {categorie.slug}
                </li>
            ))}
        </ul>
    );

    return (
        <>
            <button className='px-[25px]  absolute top-[10%] left-[1%] py-[15px] bg-[#364153] rounded text-white cursor-pointer' onClick={() => SetisOpen(!isopen)}>
                {isopen ? (<RxCross2 />) : (<CiMenuFries />)}
            </button>

            <div className={`bg-gray-800 w-full min-h-screen p-5 ${isopen ? "active" : ""}`}>
                <h1 className='text-white capitalize text-2xl' >categories</h1>
                {categoriesData}
            </div>
        </>
    )
}

export default Sidebar
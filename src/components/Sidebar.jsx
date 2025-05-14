import React, { useContext } from 'react'
import { CategoryData } from '../context/CategoriesContext'

function Sidebar() {
    let { categories, setCategories, loading } = useContext(CategoryData);
    console.log(categories);
    if (loading) {
        return <h1 className='text-white'>loading......</h1>
    }

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
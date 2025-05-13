import axios from 'axios';
import React, { lazy, Suspense, useEffect, useState } from 'react'
import Loading from '../components/Loading';
const Navbar = lazy(() => import('../components/Navbar'));
const Sidebar = lazy(() => import('../components/Sidebar'));
const ItemList = lazy(() => import('../components/ItemList'));
function Home() {
    const [product, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const ProductsData = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products`);
            setProducts(response.data.products);
            console.log(response.data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const CategoriesData = async () => {
        let responise = await axios.get(`https://dummyjson.com/products/categories`);
        let data = await responise.data;
        setCategories(data)
        console.log(data);
    }


    useEffect(() => {
        ProductsData();
        CategoriesData();
    }, []);



    return (
        <>
            <Suspense fallback={<Loading />}>
                <main className='w-full bg-gray-900'>
                    <Navbar />
                    <div className="flex  md:flex-row items-start">
                        <div className='w-full md:w-[20%]'>
                            <Sidebar categories={categories} />
                        </div>
                        <div className="w-full md:w-[80%] bg-gray-900">
                            <ItemList product={product} />
                        </div>
                    </div>
                </main>
            </Suspense>

        </>
    )
}

export default Home

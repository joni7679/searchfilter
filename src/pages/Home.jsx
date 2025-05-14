import axios from 'axios';
import React, { lazy, Suspense, useEffect, useState } from 'react'
import Loading from '../components/Loading';
const Navbar = lazy(() => import('../components/Navbar'));
const Sidebar = lazy(() => import('../components/Sidebar'));
const ItemList = lazy(() => import('../components/ItemList'));
function Home() {
    const [product, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [totalPage, setotalPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    let ProductPerPage = 5;
    // nextpagelogic
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
        console.log(currentPage);
    }

    const handlePrev = () => {
        setCurrentPage(currentPage - 1);
    }

    const ProductsData = async () => {
        // ?limit=${ProductPerPage}&skip=${(currentPage - 1) * ProductPerPage} 
        try {
            const response = await axios.get(`https://dummyjson.com/products`);
            setProducts(response.data.products);
            console.log(response.data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    

    useEffect(() => {
        ProductsData();
    }, []);



    return (
        <>
            <Suspense fallback={<Loading />}>
                <main className='w-full bg-gray-900'>
                    <Navbar />
                    <div className="flex  md:flex-row items-start">
                        <div className='w-full md:w-[20%]'>
                            <Sidebar />
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

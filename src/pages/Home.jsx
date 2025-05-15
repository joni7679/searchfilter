import axios from 'axios';
import React, { lazy, Suspense, useEffect, useState } from 'react'
import Loading from '../components/Loading';
import Shimmer from '../components/Shimmer';
const Navbar = lazy(() => import('../components/Navbar'));
const Sidebar = lazy(() => import('../components/Sidebar'));
const ItemList = lazy(() => import('../components/ItemList'));
function Home() {
    const [product, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [totalPage, setotalPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [isopen, SetisOpen] = useState(false);
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

    if (!product) {
        return (
            <>
                <Navbar />
                <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
                    <Shimmer />
                </div>
            </>
        );
    }

    return (
        <>
            <Suspense fallback={<Loading />}>
                <main className='w-full bg-gray-900'>
                    <Navbar />
                    <div className="flex  md:flex-row items-start">
                        <div className={`${isopen ? "w-0" : "md:w-[20%]"}`}
                        >
                            <Sidebar isopen={isopen} SetisOpen={SetisOpen} />
                        </div>
                        <div className={`w-full  bg-gray-900 trtransition-all duration-500 linear px-5 ${isopen ? "md:w-full" : "md-w-[80%]"}`}>
                            <ItemList product={product} isopen={isopen} SetisOpen={SetisOpen} />
                        </div>
                    </div>
                </main>
            </Suspense>
        </>
    )
}

export default Home

import React, { lazy, Suspense, useState } from 'react'
const Navbar = lazy(() => import('../components/Navbar'));

import Loading from '../components/Loading';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar'


function SearchResults() {
    const [searchquery, setsearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setsearchQuery(e.target.value);
    };

    const handleSearch = async () => {
        if (searchquery.trim() === '') {
            setResults([]);
            return;
        }
        navigate(`/search?q=${encodeURIComponent(searchquery.trim())}`);
        try {
            const response = await axios.get(`https://dummyjson.com/products/search?q=${searchquery}`);
            setResults(response.data.products);
            console.log(response.data.products);
            console.log(response.data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const keyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    const productTitle = (product) => {
        setsearchQuery(product.title);
        console.log(product.title);

        setTimeout(() => {
            // navigate(`/product/${product.id}`);
            navigate(`/product/${product.id}?q=${encodeURIComponent(product.title)}`);
        }, 100)

    }
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
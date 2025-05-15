import React, { lazy, Suspense, useEffect, useState } from 'react'
const Navbar = lazy(() => import('../components/Navbar'));
import Loading from '../components/Loading';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ItemList from '../components/ItemList';
import Sidebar from '../components/Sidebar';
import Shimmer from '../components/Shimmer';



function SearchResults() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [isopen, SetisOpen] = useState(false);
    const { search } = useLocation();
    // console.log("search", search);
    const queryParams = new URLSearchParams(search);
    // console.log("queryParams", queryParams);
    const searchQuery = queryParams.get('q');
    // console.log("searchQuery", searchQuery);

    let fetchProducts = async () => {
        try {
            let response = await axios.get(`https://dummyjson.com/products/search?q=${searchQuery}`);
            // console.log(response.data.products);
            setProducts(response.data.products);
            setLoading(false)
            if (!response.ok) {
                console.log("no found");
            }
        } catch (error) {
            console.log("error featching peroblem plz try aging", error);
            setLoading(false)
        }
    }

    useEffect(() => {
        if (searchQuery) {
            fetchProducts()
        }
    }, [searchQuery])

    if (!products) {
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
                <main className='w-full bg-gray-900 h-screen'>
                    <div className={`w-full  bg-gray-900 `}>
                        {products.length > 0 ? (
                            <ItemList product={products} isopen={isopen} SetisOpen={SetisOpen} />
                        ) : (
                            <div className={`w-full h-screen flex items-center justify-center ${loading ? 'bg-gray-900' : ''}`}>
                                {loading ? (
                                    <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
                                        <Shimmer />
                                    </div>
                                ) : (
                                    <h1 className="text-white font-semibold text-4xl">No data found for "{searchQuery}"</h1>
                                )}
                            </div>
                        )}
                    </div>
                </main>
            </Suspense >
        </>
    )
}

export default SearchResults

    // < main className = 'w-full bg-gray-900' >
    //     <div className={`w-full  bg-gray-900 trtransition-all duration-500 linear px-5 ${isopen ? "md:w-full" : "md-w-[80%]"}`}>
    //         <ItemList product={product} isopen={isopen} SetisOpen={SetisOpen} />
    //     </div>
    //             </ >
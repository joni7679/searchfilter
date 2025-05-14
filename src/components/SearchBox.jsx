import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RxCross1 } from 'react-icons/rx';
import { FaSearch } from 'react-icons/fa';
import ItemList from './ItemList';
import SearchResults from '../pages/SearchResults';

const SearchBox = () => {
    const [isClicked, setIsClick] = useState(false);
    const [searchquery, setsearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setsearchQuery(e.target.value);
    };

    const handleSearch = async () => {

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
            // navigate(`/product/${product.id}?q=${encodeURIComponent(product.title)}`);
            navigate(`/search?q=${encodeURIComponent(product.title)}`);
        }, 1000)

    }


    return (
        <div className="mb-6 text-white z-20 w-[80%] relative">
            <input
                type="text"
                placeholder="Search items..."
                value={searchquery}
                onChange={handleInputChange}
                onFocus={() => setIsClick(true)}
                onKeyDown={keyDown}
                className="relative w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <CiSearch
                onClick={handleSearch}
                className='absolute right-4 top-2 text-2xl cursor-pointer'
            />
            {searchquery && (
                <button
                    onClick={() => {
                        setsearchQuery('');
                        setResults([]);
                    }}
                    className="absolute right-12 top-[10px] text-white text-lg"
                >
                    <RxCross1 className='cursor-pointer' />
                </button>
            )}
            <div
                onMouseEnter={() => setIsClick(true)}
                onMouseLeave={() => setIsClick(false)}


                className={`absolute w-full max-h-60 overflow-scroll auto-suggestion-list bg-gray-800 rounded-2xl flex flex-col gap-2 p-4 mt-1 ${isClicked && (results.length > 0 || searchquery) ? '' : 'hidden'}`}>
                {results.length > 0 ? (
                    <ul>
                        {results.map((item, index) => (
                            <li
                                key={index} onClick={() => productTitle(item)}
                                className="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center gap-2">
                                <div className='flex items-center gap-1.5'>
                                    <div className='w-8 h-8 bg-gray-700 rounded'>
                                        <img src={item.thumbnail} loading='lazy' className='w-full h-full object-cover' alt="" />
                                    </div>
                                    <FaSearch />
                                    {item.title}
                                </div>

                            </li>
                        ))}
                    </ul>
                ) : (
                    searchquery && (
                        <div className="text-white p-2  rounded text-center">
                            No Results Found
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default SearchBox;

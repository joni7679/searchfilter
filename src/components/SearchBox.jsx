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

    const productTitle = (productId) => {
        setsearchQuery(productId.title)
        navigate(`/product/${productId}`);
    }

    return (
        <div className="mb-6 text-white z-20 w-[80%] relative">
            <input
                type="text"
                placeholder="Search items..."
                value={searchquery}
                onChange={handleInputChange}
                onFocus={() => setIsClick(true)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
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
                                key={index} onClick={() => productTitle(item.id || item.title)}
                                className="p-2 hover:bg-gray-700 rounded cursor-pointer flex items-center gap-2">
                                <FaSearch />
                                {item.title}
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
                {/* <ItemList product={results} /> */}
            </div>
        </div>
    );
};

export default SearchBox;

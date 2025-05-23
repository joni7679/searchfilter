import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { CategoryData } from '../context/CategoriesContext';
import Navbar from './Navbar';

const ItemList = ({ product, isopen, SetisOpen }) => {
    if (!product) {
        return (
            <>
                <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
                    <Shimmer />
                </div>
            </>
        );
    }
    return (
        <>
            <div className="flex justify-center items-start item-list h-[70vh] p-5 overflow-y-auto  text-white w-full">
                <div className={`grid gap-6 max-w-7xl w-full transition-all duration-500 linear  ${isopen ? 'md:grid-cols-4 ' : 'lg:grid-cols-3 md:grid-cols-2'}`}>
                    {product.map((item, index) => (
                        <Link to={`/product/${item.id}?title=${encodeURIComponent(item.title)}`}
                            key={index}
                            className="p-5 bg-gray-800 rounded-xl sm:grid-cols-1 product-list-item shadow-md border hover:shadow-lg transition-all duration-300">
                            <div className='w-full'>
                                <img loading='lazy' src={item.thumbnail} className='w-full h-full object-contain' alt={item.thumbnail} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-100 mb-2">{item.description}</p>
                            <p className="text-sm"><span className="font-medium">Category:</span> {item.category}</p>
                            <p className="text-sm"><span className="font-medium">Price:</span>  ₹ {item.price}</p>
                            <p className="text-sm"><span className="font-medium">Discount:</span> {item.discountPercentage}%</p>
                            <p className="text-sm flex items-center gap-2"><span className="font-semibold">Rating:</span> {item.rating} <FaStar className='inline-block text-amber-400' />
                            </p>
                            <p className="text-sm"><span className="font-semibold">Stock:</span> {item.stock} left</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {item.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
           
        </>
    );
};

export default ItemList;

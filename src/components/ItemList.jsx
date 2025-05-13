import React from 'react';
import { FaStar } from 'react-icons/fa';
import PaginitonBtn from './PaginitonBtn';
import { Link } from 'react-router-dom';

const ItemList = ({ product }) => {

    return (
        <>
            <div className="flex justify-center items-start item-list h-[70vh] p-5 overflow-y-auto  text-white w-full">
                <div className="grid md:grid-cols-3 gap-6 max-w-7xl w-full ">
                    {product.map((item, index) => (
                        <Link to={`/product/${item.id}`}
                            key={index}
                            className="p-5 bg-gray-800 rounded-xl sm:grid-cols-1 product-list-item shadow-md border hover:shadow-lg transition-all duration-300">
                            <div className='w-full'>
                                <img loading='lazy' src={item.thumbnail} className='w-full h-full object-contain' alt="" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-100 mb-2">{item.description}</p>
                            <p className="text-sm"><span className="font-medium">Category:</span> {item.category}</p>
                            <p className="text-sm"><span className="font-medium">Price:</span> ${item.price}</p>
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
            <PaginitonBtn />
        </>


    );
};

export default ItemList;

import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { FaStar } from 'react-icons/fa';
import Loading from './Loading';
import LargeShimmerCard from './LargeShimmerCard';

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);


    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            setProduct(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (!product) {
        return (
            <>
                <Navbar />
                <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
                    <LargeShimmerCard />
                </div>
            </>
        );
    }

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Navbar />
                <main className='w-full  bg-gray-900  text-white product-container flex items-center flex-col'>
                    <div className='product-item w-[60vw] mt-[100px] h-auto border-2 border-white shadow-2xs rounded p-5 bg-gray-800 flex gap-5 
                    items-product '>
                        <div className='img-list '>
                            {product.images.map((img, index) => {
                                return (
                                    <div key={index} className='w-16 h-16 bg-gray-900 mt-2 rounded-xl'>
                                        <img src={img} className='w-full h-full object-cover' alt={img} />
                                    </div>
                                )
                            })}
                        </div>
                        <div className='main-img-div w-60 h-60 flex-shrink-0'>
                            <img
                                loading='lazy'
                                src={product.thumbnail}
                                alt={product.title}
                                className='w-full h-full object-cover rounded'
                            />
                        </div>

                        <div>
                            <h1 className='text-[1.5rem] font-bold mb-2'>{product.title}</h1>
                            <p className='text-gray-300 mb-2'>{product.description}</p>
                            <p className='text-white font-semibold text-xl mb-1'>  ₹ {product.price}</p>
                            <p className='font-semibold capitalize flex items-center gap-3'>rating : {product.rating} <FaStar /></p>
                            <p className='text-green-500'>In Stock: {product.stock}</p>
                            <p className='text-green-500 font-semibold capitalize'>warrantyInformation : {product.warrantyInformation}</p>
                            <p className='text-green-500 font-semibold capitalize'>returnPolicy : {product.returnPolicy}</p>
                            <div className="grid md:grid-cols-2 gap-2 mt-5 sm:grid-cols-1 btn-group">
                                <button className='px-[25px] py-[10px] bg-gray-900 text-white rounded-xl cursor-pointer hover:bg-gray-950'>Add To Cart</button>
                                <button className='px-[25px] py-[10px] bg-gray-900 text-white rounded-xl cursor-pointer hover:bg-gray-950'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <h1 className='mt-5 text-2xl font-stretch-semi-condensed'>Previous customer Reviews</h1>
                    <div className='w-[60vw] h-[25rem] overflow-scroll review mt-5 border-2 border-white shadow-2xs rounded p-5 bg-gray-800 flex gap-5'>
                        <div className="w-[60vw]  h-full mt-5  shadow-2xl rounded p-5  flex items-center flex-col gap-5">
                            {product.reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="w-[90%] md:w-[80%]  bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-lg rounded-xl p-6 my-4"
                                >
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                                {review.reviewerName}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {review.reviewerEmail}
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-400">
                                            {new Date(review.date).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed flex items-center justify-between">
                                        {review.comment}
                                        <p className='flex items-center gap-2'>{review.rating} <FaStar className='inline-block' />
                                        </p>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </Suspense>
        </>
    );
}

export default ProductPage;

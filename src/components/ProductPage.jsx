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
                <main className='w-full min-h-screen bg-gray-900  flex items-center justify-center sm:flex-col text-white product-container'>
                    <div className='w-[60vw] mt-5 h-auto border-2 border-white shadow-2xs rounded p-5 bg-gray-800 flex gap-5 
                    items-product'>
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
                            <h1 className='text-3xl font-bold mb-2'>{product.title}</h1>
                            <p className='text-gray-300 mb-2'>{product.description}</p>
                            <p className='text-white font-semibold text-xl mb-1'>  ₹ {product.price}</p>
                            <p className='font-semibold capitalize flex items-center gap-3'>rating : {product.rating} <FaStar /></p>
                            <p className='text-green-500'>In Stock: {product.stock}</p>
                            <p className='text-green-500 font-semibold capitalize'>warrantyInformation : {product.warrantyInformation}</p>
                            <p className='text-green-500 font-semibold capitalize'>returnPolicy : {product.returnPolicy}</p>
                            <div className="flex mt-5 gap-2 items-center">
                                <button className='px-[25px] py-[10px] bg-gray-900 text-white rounded-xl cursor-pointer hover:bg-gray-950'>Add To Cart</button>
                                <button className='px-[25px] py-[10px] bg-gray-900 text-white rounded-xl cursor-pointer hover:bg-gray-950'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <h1 className='mt-5 text-2xl font-stretch-semi-condensed'>Previous customer Reviews</h1>
                    <div className='w-[60vw] h-[25rem] overflow-scroll review mt-5 border-2 border-white shadow-2xs rounded p-5 bg-gray-800 flex gap-5'>

                        <div className="w-[60vw] h-[25rem] mt-5 border-2 border-white shadow-2xl rounded p-5 bg-gray-800 flex items-center flex-col gap-5">
                            {product.reviews.map((review, index) => (
                                <div key={index} className='w-[80%] h-[10rem] border-2 border-white shadow-2xs rounded p-5 capitalize'>
                                    <div className="grid md:grid-cols-2">
                                        <p>{review.reviewerName}</p>
                                        <p>{review.reviewerEmail}</p>
                                        <p className='mt-5'>{review.comment}</p>
                                        <p className='mt-5'>{new Date(review.date).toLocaleDateString()}</p>
                                    </div>
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

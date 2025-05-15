import React, { useContext } from 'react';
import { CategoryData } from '../context/CategoriesContext';
import Shimmer from './Shimmer';
import ItemList from './ItemList';

const Category = () => {
    const { loading, products } = useContext(CategoryData);
    console.log("your cate products is", products);

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
                <Shimmer />
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-900 w-full">
            {products.length > 0 ? (
                <ItemList product={products} />
            ) : (
                <div className="w-full h-screen flex items-center justify-center">
                    <h1 className="text-white font-semibold text-4xl">No data found in Category</h1>
                </div>
            )}
        </main>
    );
};

export default Category;

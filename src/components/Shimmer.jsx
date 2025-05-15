import React from 'react';

function Shimmer() {
    const items = new Array(12).fill('');

    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-4 w-full min-h-screen">
            {items.map((_,index) => (
                <div
                    key={index}
                    className="bg-gray-800 rounded-xl shadow-md shimmer-effect w-full h-[400px] sm:h-[180px]"
                >
                </div>
            ))}
        </div>
    );
}

export default Shimmer;

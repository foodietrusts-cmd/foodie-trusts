import React from 'react';

const DishCard = ({ dish }) => {
    return (
        <div className="border rounded-xl p-4 shadow-md bg-white">
            <h2 className="text-lg font-bold">{dish.name}</h2>
            <p className="text-gray-600">{dish.restaurant}</p>
            <p className="text-sm mt-2">⭐ {dish.rating} | {dish.price}</p>
            <img src={dish.image} alt={dish.name} className="w-full h-40 object-cover rounded-lg mt-2" />
            <p className="mt-2 text-gray-700">{dish.review}</p>
        </div>
    );
}

export default DishCard;
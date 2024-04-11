import React from 'react';

const ProductCard = ({ id, title, description, price, discountPercentage, rating, stock, brand, category,image }) => {
  // Calculate discounted price
  const discountedPrice = price - (price * (discountPercentage / 100));

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-64 object-cover object-center" src={`${image}`} alt={title} />
      <div className="p-4">
        <h2 className="text-gray-800 text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="text-gray-800 font-bold">${discountedPrice.toFixed(2)}</span>
            {discountPercentage > 0 && <span className="ml-2 text-sm text-gray-500 line-through">${price.toFixed(2)}</span>}
          </div>
          <span className="text-sm text-gray-500">Rating: {rating}</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-gray-500">Stock: {stock}</span>
          <span className="text-sm text-gray-500">Brand: {brand}</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-gray-500">Category: {category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// src/components/ProductCard.jsx
import React from "react";
const ProductCard = ({ product }) => {
  return (
    
    <div className="w-95 h-[300px] border rounded-lg shadow-md p-4 bg-white mx-auto flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-sm text-gray-700">{product.description}</p>
      <p className="text-amber-900 font-semibold mt-2"> {product.price}</p>
    </div>
  );
};

export default ProductCard;

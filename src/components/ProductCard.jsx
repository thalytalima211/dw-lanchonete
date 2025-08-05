// src/components/ProductCard.jsx
import React from "react";
// recebe um prop (nome,descrição,preço,imagem)
/** h3 nome do produto
 * <P> descrição do produto
 * <p2> exibe o preço do produto
 *
 * //componente funcional ProductCard
 * mostrar as informações de um produto
 * 

 * * */
const ProductCard = ({ product }) => {
  return (
    //div
    <div className="border rounded-lg shadow-md p-4 max-w-sm bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-sm text-gray-700">{product.description}</p>
      <p className="text-amber-900 font-semibold mt-2">
        R$ {Number(product.price).toFixed(2)}
      </p>
    </div>
  );
};

export default ProductCard;

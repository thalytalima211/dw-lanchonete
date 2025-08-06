// src/components/ProductList.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
/**
 * componente ProductList lista os produtos cadastrados T
 * * */
const ProductList = () => {
  //variavel de
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const produtosSalvos = localStorage.getItem("products");
    if (produtosSalvos) {
      setProducts(JSON.parse(produtosSalvos));
      console.log("Produtos atualizados com sucess");
    }
  }, [products]);

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.length === 0 ? (
        <p className="text-center text-gray-500"> </p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;

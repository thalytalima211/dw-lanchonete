// src/components/PublicMenu.jsx
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

function PublicMenu() {
  const [products, setProducts] = useState([]);
 	const [productDetail, setProductDetail] = useState(false)
  const [filter, setFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(produtosSalvos);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesFilter = product.name.toLowerCase().includes(filter.toLowerCase()) || 
                          product.description.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesFilter && matchesCategory;
  });

  return (
    <main className="bg-amber-50 py-8 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-amber-900">Cardápio Digital</h1>

      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="search"
          placeholder="Buscar no cardápio..."
          onChange={(e) => setFilter(e.target.value)}
          className="p-3 border rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />

        <select
          className="p-3 border rounded-md w-60 focus:outline-none focus:ring-2 focus:ring-amber-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas as categorias</option>
          <option value="Lanches">Lanches</option>
          <option value="Bebidas">Bebidas</option>
          <option value="Doces">Doces</option>
          <option value="Acompanhamentos">Acompanhamentos</option>
        </select>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} setProductDetail={setProductDetail} />
        ))}
      </div>
      {productDetail && 
              <ProductDetail product={productDetail} setProductDetail={setProductDetail} view="public"/>}
    </main>
  );
}

export default PublicMenu;

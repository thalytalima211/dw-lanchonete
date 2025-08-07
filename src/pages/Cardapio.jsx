import ProductList from "../components/ProductList";

export default function Cardapio({ products, filter, selectedCategory, setProductDetail }) {
  return (
    <section className="max-w-screen-lg mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4 text-amber-900 text-center">Cardápio</h2>

      <div className="flex flex-row gap-4 mb-6 justify-center">
        <input
          type="search"
          placeholder="Pesquisar produto"
          onChange={(e) => filter.setFilter(e.target.value)}
          className="border rounded-lg p-3 outline-none w-60 transition duration-200
          focus:ring-2 focus:ring-amber-800 hover:border-amber-700 active:ring-2 active:ring-amber-900"
        />
        
        <select
          value={selectedCategory}
          onChange={(e) => filter.setSelectedCategory(e.target.value)}
          className="border rounded-lg p-3 outline-none transition duration-200
          focus:ring-2 focus:ring-amber-800 hover:border-amber-700 active:ring-2 active:ring-amber-900"
        >
          <option value="">Todas as categorias</option>
          <option value="Lanches">Lanches</option>
          <option value="Bebidas">Bebidas</option>
          <option value="Acompanhamentos">Acompanhamentos</option>
          <option value="Doces">Doces</option>
        </select>
      </div>

      <div>
        {products.length === 0 ? (
          <p className="text-center text-gray-600">Nenhum produto encontrado.</p>
        ) : (
          <ProductList
            products={products}
            filter={filter.filter}
            selectedCategory={filter.selectedCategory}
            setProductDetail={setProductDetail}
          />
        )}
      </div>
    </section>
  );
}

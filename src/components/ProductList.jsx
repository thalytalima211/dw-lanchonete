// src/components/ProductList.jsx
import ProductCard from "./ProductCard";

const ProductList = ({ products, filter, selectedCategory, setProductDetail }) => {
	const produtosFiltrados = products
		.filter((product) =>
			product.name.toLowerCase().includes(filter.toLowerCase()) ||
			product.description.toLowerCase().includes(filter.toLowerCase())
		)
		.filter((product) =>
			selectedCategory ? product.category === selectedCategory : true
		);

	return (
		<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
			{produtosFiltrados.length === 0 ? (
				<p className="col-span-full text-center text-gray-500">
					Nenhum produto encontrado com os filtros aplicados.
				</p>
			) : (
				produtosFiltrados.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						setProductDetail={setProductDetail}
					/>
				))
			)}
		</div>
	);
};

export default ProductList;

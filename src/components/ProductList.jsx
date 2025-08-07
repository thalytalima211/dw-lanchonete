// src/components/ProductList.jsx
import ProductCard from "./ProductCard";

const ProductList = ({ products, filter, setProductDetail }) => {
	return (
		<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
			{products
				.filter((product) => 
					product.name.toLowerCase().includes(filter.toLowerCase()) ||
					product.description.toLowerCase().includes(filter.toLowerCase())
				)
				.map((product) => (
					<ProductCard key={product.id} product={product} setProductDetail={setProductDetail} />
				))}
		</div>
	);
};

export default ProductList;

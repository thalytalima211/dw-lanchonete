import { useState } from "react";
import "./App.css";
import NewProduct from "./components/NewProduct";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
	const [newProductModal, setNewProductModal] = useState(false);
 	const [productDetail, setProductDetail] = useState(false)
	const [products, setProducts] = useState(() => {
		return JSON.parse(localStorage.getItem("products")) || [];
	});
	const [filter, setFilter] = useState('');

	const atualizarProdutos = () => {
		const produtosSalvos = JSON.parse(localStorage.getItem("products")) || [];
		setProducts(produtosSalvos);
	};

	const handleDelete = (id) => {
		const produtosAtualizados = products.filter((produto) => produto.id !== id);
		localStorage.setItem("products", JSON.stringify(produtosAtualizados));
		setProducts(produtosAtualizados);
		setProductDetail(false); 
	};
	console.log("📦 Produtos cadastrados:", products);

	return (
		<main className="bg-amber-50 py-7 px-8 min-h-[100vh]">
			<h1 className="font-bold text-3xl text-center">Lanche do IF</h1>
			<div className="flex flex-row justify-evenly mt-4">
				<button
					className="w-fit transition transition-300 bg-amber-900 hover:bg-amber-950 text-white p-3 rounded-xl"
					onClick={() => setNewProductModal(true)}
				>
					Cadastrar Novo Produto
				</button>
			</div>

			<div className="flex flex-row justify-evenly mt-4">
				<input className="border rounded-lg w-100 p-3" placeholder="Pesquisar produto" 
				type="search" onChange={(e) => setFilter(e.target.value)}></input>
				
				/** filtros aqui */
			</div>
			
			<div className="mt-10">
				{products.length === 0 
				? <p className="text-center">Sem produtos cadastrados! Cadastre um novo produto para continuar</p>
				: <ProductList products={products} filter={filter} setProductDetail={setProductDetail}/>}
			</div>
			{newProductModal && (
				<NewProduct
					setNewProductModal={setNewProductModal}
					atualizarProdutos={atualizarProdutos}
				/>
			)}
			{productDetail && 
				<ProductDetail product={productDetail} setProductDetail={setProductDetail} handleDelete={handleDelete}/>}
		</main>
	);
}

export default App;

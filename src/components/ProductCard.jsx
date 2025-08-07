const ProductCard = ({ product, setProductDetail }) => {
  return (
    
    <div className="h-fit border rounded-lg shadow-md p-4 bg-white mx-auto flex flex-col justify-between cursor-pointer transition transition-300 hover:scale-102"
    onClick={() => setProductDetail(product)}>
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

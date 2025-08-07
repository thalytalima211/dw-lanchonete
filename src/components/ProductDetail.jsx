import PopUp from "./PopUp/PopUp"
import { X } from 'lucide-react'

export default function ProductDetail({product, setProductDetail, handleDelete}){
    return(
        <PopUp>
          <div className="flex justify-end w-full">
          <X
            className="cursor-pointer text-black"
            onClick={() => setProductDetail(false)}
          />
        </div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-50 object-cover rounded-md"
          />

          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-sm text-gray-700">{product.description}</p>
          <p>Categoria: {product.category}</p>
          <p className="text-amber-900 font-semibold text-lg"> {product.price}</p>

          <div>
            <p>Ingredientes:</p>
            <p className="text-sm text-gray-700">{product.ingredients}</p>
          </div>

          <p>Tempo estimado de preparo: {product.preparation_time} min</p>
          <p>Valor calórico: {product.caloric_value} kcal</p>

          <button
                className="w-fit transition transition-300 bg-amber-900 hover:bg-amber-950 text-white p-3 mx-auto rounded-xl"
                onClick={() => handleDelete(product.id)}
            >
                Excluir produto
            </button>
      </PopUp>
    )
}
      
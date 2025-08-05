import { useState } from 'react'
import './App.css'
import NewProduct from './components/NewProduct'

function App() {
  const [newProductModal, setNewProductModal] = useState(false)
  const products = JSON.parse(localStorage.getItem('products')) || [];
  console.log('📦 Produtos cadastrados:', products);
  console.log('📦 EXEMPLO: Eu pego um certo dado assim: ', products[0].name);

  return (
    <main className='bg-amber-50 py-7 px-8 min-h-[100vh]'>
      <h1 className='font-bold text-3xl text-center'>Lanche do IF</h1>
      <div className='flex flex-col mt-4'>
        <button className='w-fit mx-auto bg-amber-900 hover:bg-amber-950 text-white p-3 rounded-xl'
          onClick={() => setNewProductModal(true)}>
          Cadastrar Novo Produto
        </button>
      </div>
      {newProductModal && <NewProduct setNewProductModal={setNewProductModal}/>}
    </main>
  )
}

export default App

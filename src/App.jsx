import "./App.css";
import { useState } from "react";
import NewProduct from "./components/NewProduct";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import restauranteImage from './assets/images/restaurante-academico.jpg';
import restauranteCalendar from './assets/images/restaurante-eventos.png';

function App() {
  const [newProductModal, setNewProductModal] = useState(false);
  const [productDetail, setProductDetail] = useState(false);
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });
  const [filter, setFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const scrollToSection = (id) => {
    if (mobileMenuOpen) setMobileMenuOpen(false);

    const headerOffset = 100;
    const element = document.getElementById(id);
    if (!element) return;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <header className="fixed top-0 left-0 right-0 bg-[#CEE8D3] shadow-md flex items-center justify-between px-4 md:px-8 py-5 z-50">
        <div className="flex items-center gap-5">
          <img src="src/assets/images/ifce.png" alt="IF Logo" className="h-16 rounded-md" />
          <h1 className="responsive-title font-extrabold text-amber-900 whitespace-nowrap">
            Restaurante Acadêmico IFCE - Tianguá
          </h1>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-amber-700 hover:text-white transition"
          aria-label="Abrir menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        <nav className="hidden md:flex gap-10 font-semibold text-amber-900">
          {["sobre", "cadastro", "cardápio", "calendário"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="hover:text-amber-700 transition-colors duration-200 text-lg"
            >
              {section === "sobre"
                ? "Sobre"
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {mobileMenuOpen && (
        <nav className="fixed top-[104px] right-0 left-0 bg-[#CEE8D3] shadow-md flex flex-col items-center gap-6 py-6 z-40 md:hidden">
          {["sobre", "cadastro", "cardapio", "calendario"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-amber-900 font-semibold text-xl hover:text-amber-700 transition-colors duration-200"
            >
              {section === "sobre"
                ? "Sobre"
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      )}

      <div className="h-24"></div>

      <main className="w-screen mx-auto px-0">
        <section
          id="sobre"
          className="scroll-mt-32 bg-[#F5F0E6] rounded-r-3xl shadow-xl p-16 flex flex-col md:flex-row items-center gap-10 w-full"
        >
          <div className="md:w-1/2 text-left">
            <h2 className="text-5xl font-extrabold text-amber-900 mb-6">Sobre o Restaurante</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              O Restaurante Acadêmico do IFCE Campus Tianguá oferece refeições saborosas,
              nutritivas e a preços acessíveis para a comunidade acadêmica e visitantes.
            </p>
          </div>
          <img
            src={restauranteImage}
            alt="Lanches do restaurante"
            className="md:w-1/2 rounded-2xl shadow-lg"
          />
        </section>

        <section
          id="cadastro"
          className="scroll-mt-32 bg-[#CEE8D3] rounded-l-3xl shadow-xl p-16 flex flex-col md:flex-row-reverse items-center gap-10 w-full"
        >
          <div className="md:w-1/2 text-right">
            <h2 className="text-4xl font-semibold text-amber-900 mb-6">Cadastro de Alimentos</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Cadastre novos produtos para aparecerem no cardápio público. É fácil e rápido!
            </p>
            <button
              className="bg-amber-900 hover:bg-amber-800 active:bg-amber-700 text-white px-12 py-5 rounded-3xl shadow-lg transition-all duration-300"
              onClick={() => setNewProductModal(true)}
            >
              Cadastrar Novo Produto
            </button>
          </div>
        </section>

        <section
          id="cardapio"
          className="scroll-mt-32 bg-white rounded-r-3xl shadow-xl p-16"
        >
          <h2 className="text-4xl font-semibold text-amber-900 mb-12 text-center md:text-left">Cardápio</h2>

          <div className="flex flex-col md:flex-row md:justify-start gap-8 mb-12">
            <input
              type="search"
              placeholder="Pesquisar produto"
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-3xl p-5 w-full md:w-96 outline-none
                focus:ring-2 focus:ring-amber-800 hover:border-amber-700 transition duration-200"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-3xl p-5 w-full md:w-64 outline-none
                focus:ring-2 focus:ring-amber-800 hover:border-amber-700 transition duration-200"
            >
              <option value="">Todas as categorias</option>
              <option value="Lanches">Lanches</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Acompanhamentos">Acompanhamentos</option>
              <option value="Doces">Doces</option>
            </select>
          </div>

          {products.length === 0 ? (
            <p className="text-center text-gray-500 text-xl">
              Sem produtos cadastrados! Cadastre um novo produto para continuar.
            </p>
          ) : (
            <ProductList
              products={products}
              filter={filter}
              selectedCategory={selectedCategory}
              setProductDetail={setProductDetail}
            />
          )}
        </section>

        <section
          id="calendario"
          className="scroll-mt-32 w-screen bg-[#FFF7D1] rounded-l-3xl shadow-xl"
        >
          <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/2 text-right">
              <h2 className="text-5xl font-extrabold mb-6 text-amber-900">Calendário</h2>
              <p className="text-gray-700 text-lg mb-2">
                Confira os eventos e datas especiais do restaurante:
              </p>
              <ul className="text-gray-700 text-lg space-y-2 mt-4">
                <li>12/08 - Almoço especial do Dia do Estudante</li>
                <li>20/08 - Festival de Doces</li>
                <li>01/09 - Lançamento do cardápio vegetariano</li>
                <li>15/09 - Aniversário do restaurante</li>
              </ul>
            </div>

            <img
              src={restauranteCalendar}
              alt="Eventos no restaurante"
              className="md:w-1/2 rounded-2xl shadow-lg"
            />
          </div>
        </section>
      </main>

      <footer className="bg-amber-900 text-white py-6 px-4 text-center text-sm">
        <p>Restaurante Acadêmico IFCE - CE-187, s/n - Campus Tianguá</p>
        <p>Seg a Sex • 07h às 22h • Contato: (85) 3455-3081</p>
      </footer>

      {newProductModal && (
        <NewProduct setNewProductModal={setNewProductModal} atualizarProdutos={atualizarProdutos} />
      )}
      {productDetail && (
        <ProductDetail product={productDetail} setProductDetail={setProductDetail} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default App;

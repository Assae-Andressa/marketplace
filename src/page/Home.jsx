import Produto from "../components/Produto";

const Home = ({ produtos, adicionarAoCarrinho }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-start mb-4">Produtos</h2>
      <div className="row">
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

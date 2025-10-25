import Star from "./Star";
import { Link } from "react-router-dom";

const Produto = ({ produto, adicionarAoCarrinho }) => {
  return (
    <div className="col-md-3 mb-4">
      {/*imagem do produto */}
      <div className="card h-100 shadow-sm">
        <img
          src={`https://placehold.co/300x200/000000/FFFFFF/png?text=${produto.nome}`}
          className="card-img-top"
          alt={produto.nome}
          style={{ cursor: "pointer" }}
        />
        {/*dados do produto */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{produto.nome}</h5>
          <p className="card-text fw-bold text-primary">
            R$ {produto.valor.toFixed(2)}
          </p>
          <div className="mb-3">
            <Star rating={produto.classificacao} />
          </div>
          <div className="mt-auto">
            <Link
              to={`/detalheProduto/${produto.id}`}
              className="btn btn-outline-primary w-100 mb-2"
            >
              <i className="bi bi-eye me-1"></i> Ver Detalhes
            </Link>
            <button
              className="btn btn-primary w-100"
              onClick={() => adicionarAoCarrinho(produto)}
            >
              <i className="bi bi-cart-plus me-1"></i> Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produto;

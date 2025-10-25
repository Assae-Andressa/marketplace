import { useParams, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Star from "../components/Star";

const DetalheProduto = ({ produtos, adicionarAoCarrinho }) => {
  const { id } = useParams();
  let produto = null;

  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].id == id) {
      produto = produtos[i];
      break;
    }
  }

  return (
    <div>
      {produto ? (
        <div className="container mt-4">
          <Link to="/" className="btn btn-outline-secondary mb-4">
            <i className="bi bi-arrow-left"></i> Voltar
          </Link>
          <div className="row">
            {/* Imagem do produto */}
            <div className="col-md-6 mb-4">
              <img
                src={`https://placehold.co/600x400/000000/FFFFFF/png?text=${produto.nome}`}
                className="img-fluid rounded shadow"
                alt={produto.nome}
              />
            </div>

            {/* Detalhes do produto */}
            <div className="col-md-6">
              <h1 className="mb-3">{produto.nome}</h1>

              <div className="mb-3">
                <Star rating={produto.classificacao} />
              </div>

              <h2 className="text-primary mb-4">
                R$ {produto.valor.toFixed(2)}
              </h2>

              <div className="mb-4">
                <h5>Descrição</h5>
                <p className="text-muted">{produto.descricao}</p>
              </div>

              <div className="mb-4">
                <h5>Especificações</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <strong>Código do Produto:</strong> #{produto.id}
                  </li>
                  <li className="mb-2">
                    <strong>Categoria:</strong> {produto.categoria}
                  </li>
                  <li className="mb-2">
                    <strong>Avaliação:</strong>{" "}
                    {produto.classificacao.toFixed(1)} de 5 estrelas
                  </li>
                  <li className="mb-2">
                    <strong>Disponibilidade:</strong>{" "}
                    <span className="badge bg-success">Em estoque</span>
                  </li>
                </ul>
              </div>

              <button
                className="btn btn-primary btn-lg w-100"
                onClick={() => adicionarAoCarrinho(produto)}
              >
                <i className="bi bi-cart-plus me-2"></i>
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/404" replace />
      )}
    </div>
  );
};

export default DetalheProduto;

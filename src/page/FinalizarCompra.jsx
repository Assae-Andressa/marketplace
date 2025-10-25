import { Link } from "react-router-dom";

const FinalizarCompra = ({ carrinho }) => {
  const total = carrinho.reduce((acc, item) => {
    const quantidade = item.quantidade || 1;
    return acc + item.valor * quantidade;
  }, 0);

  return (
    <div className="container mt-4">
      <h2 className="text-start mb-4">Finalizar Compra</h2>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Resumo do Pedido</h5>

          {carrinho.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between border-bottom py-2"
            >
              <span>
                {item.nome} (x{item.quantidade})
              </span>
              <span>R$ {(item.valor * item.quantidade).toFixed(2)}</span>
            </div>
          ))}

          <div className="d-flex justify-content-between mt-3 fw-bold">
            <span>Total:</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>

          <div className="mt-4">
            <button className="btn btn-success w-100 mb-2">
              Confirmar Pedido
            </button>
            <Link to="/carrinho" className="btn btn-outline-secondary w-100">
              Voltar ao Carrinho
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalizarCompra;

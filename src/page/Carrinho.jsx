import { Link } from "react-router-dom";

const Carrinho = ({ carrinho, removerDoCarrinho }) => {
  const total = carrinho.reduce((acc, item) => {
    const quantidade = item.quantidade || 1;
    return acc + item.valor * quantidade;
  }, 0);

  return (
    <div className="container mt-4">
      <h2 className="text-start mb-4">Carrinho</h2>

      {carrinho.length > 0 ? (
        <>
          <p className="text-start">Itens: {carrinho.length}</p>

          <div className="mb-3">
            {carrinho.map((item, index) => (
              <div
                key={index}
                className="border-bottom py-3 d-flex align-items-center"
              >
                <img
                  src={`https://placehold.co/300x200/000000/FFFFFF/png?text=${item.nome}`}
                  alt={item.nome}
                  style={{ width: "80px", height: "60px", objectFit: "cover" }}
                  className="me-3"
                />

                <div className="flex-grow-1">
                  <p className="mb-1">
                    <strong>{item.nome}</strong>
                  </p>
                  <p className="mb-0">
                    R$ {item.valor.toFixed(2)}
                    {item.quantidade && ` (x${item.quantidade})`}
                  </p>
                </div>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removerDoCarrinho(item)}
                >
                  <i className="bi bi-trash"></i> Remover
                </button>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4 p-3 bg-light rounded">
            <h4 className="mb-0">Total: R$ {total.toFixed(2)}</h4>
            <Link to="/finalizarCompra" className="btn btn-success btn-lg">
              <i className="bi bi-check-circle me-2"></i>
              Finalizar Compra
            </Link>
          </div>
        </>
      ) : (
        <div className="alert alert-info">
          <i className="bi bi-cart-x me-2"></i>
          Carrinho vazio
        </div>
      )}
    </div>
  );
};

export default Carrinho;

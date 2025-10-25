import { Link } from "react-router-dom";

const Navbar = ({ totalItens }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand ms-5" to="/">
          Minha Loja
        </Link>

        <div className="d-flex">
          <Link to="/" className="btn btn-outline-light me-2">
            <i className="bi bi-house-door"></i> Produtos
          </Link>
          <Link
            to="/carrinho"
            className="btn btn-outline-light position-relative"
          >
            <i className="bi bi-cart"></i> Carrinho
            {totalItens > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItens}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Carrinho from "./page/Carrinho";
import FinalizarCompra from "./page/FinalizarCompra";
import DetalheProduto from "./page/DetalheProduto";
import NotFound from "./page/NotFound";
import produtosData from "./data/produtos.json"
//const url = "http://localhost:3000/produtos";
function App() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  //carregar produtos do bd
/*  useEffect(() => {
    const fetchProdutos = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setProdutos(data);
    };

    fetchProdutos();
  }, []);*/

  //carregar produtos do arquivo JSON
  useEffect(() => {
    setProdutos(produtosData);
  }, []);

  //adicionar ao carrinho
  const adicionarAoCarrinho = (produto) => {
    const produtoExiste = carrinho.find((item) => item.id === produto.id);
    // se produto ja existe no carrinho só atualiza a quantidade
    if (produtoExiste) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        ),
      );
      //se não existe ainda adiciona no carrinho
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const removerDoCarrinho = (produtoRemover) => {
    let novoCarrinho = [];

    for (let i = 0; i < carrinho.length; i++) {
      const produto = carrinho[i];

      if (produto.id === produtoRemover.id) {
        // Se a quantidade é maior que 1, diminui
        if (produto.quantidade > 1) {
          novoCarrinho.push({
            ...produto,
            quantidade: produto.quantidade - 1,
          });
        }
        // Se quantidade é 1, não adiciona (remove do carrinho)
      } else {
        // Produtos diferentes, mantém no carrinho
        novoCarrinho.push(produto);
      }
    }

    setCarrinho(novoCarrinho);
  };

  // Calcular total de itens no carrinho
  let totalItens = 0; // Começa com zero

  // Percorre cada item do carrinho
  for (let i = 0; i < carrinho.length; i++) {
    const item = carrinho[i];
    totalItens = totalItens + item.quantidade; // Soma a quantidade de cada item
  }

  return (
    <>
      <Navbar totalItens={totalItens} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              produtos={produtos}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          }
        />
        <Route
          path="/carrinho"
          element={
            <Carrinho
              carrinho={carrinho}
              removerDoCarrinho={removerDoCarrinho}
            />
          }
        />
        <Route
          path="/finalizarCompra"
          element={<FinalizarCompra carrinho={carrinho} />}
        />
        <Route
          path="/detalheProduto/:id"
          element={
            <DetalheProduto
              produtos={produtos}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

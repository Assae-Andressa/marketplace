const Star = ({ rating, maxStars = 5 }) => {
  const estrelasCompletas = Math.floor(rating);
  const temMeiaEstrela = rating % 1 >= 0.5;
  const estrelasVazias =
    maxStars - estrelasCompletas - (temMeiaEstrela ? 1 : 0);

  // Criar arrays com o número exato de estrelas
  const arrayEstrelasCompletas = Array.from({ length: estrelasCompletas });
  const arrayEstrelasVazias = Array.from({ length: estrelasVazias });

  return (
    <div className="d-inline-flex align-items-center gap-1">
      {/* Estrelas cheias */}
      {arrayEstrelasCompletas.map((_, indice) => (
        <i key={`cheia-${indice}`} className="bi bi-star-fill text-warning"></i>
      ))}

      {/* Meia estrela */}
      {temMeiaEstrela && <i className="bi bi-star-half text-warning"></i>}

      {/* Estrelas vazias */}
      {arrayEstrelasVazias.map((_, indice) => (
        <i key={`vazia-${indice}`} className="bi bi-star text-warning"></i>
      ))}

      <span className="ms-1 text-muted small">({rating.toFixed(1)})</span>
    </div>
  );
};

export default Star;

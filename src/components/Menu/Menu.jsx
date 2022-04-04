import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <header>
      <nav>
        <Link to="/">Como fazer</Link>
        <p>/</p>
        <Link to="/ofertas">Ofertas</Link>
        <p>/</p>
        <Link to="/depoimentos">Depoimentos</Link>
        <p>/</p>
        <Link to="/videos">Vídeos</Link>
        <p>/</p>
        <Link to="/meu-carinho">Meu Carrinho</Link>
      </nav>
    </header>
  );
}

export default Menu;
